// src/app/pages/register/register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {
  registerData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  async onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('A két jelszó nem egyezik meg!');
      return;
    }

    try {
      const emailLower = this.registerData.email.toLowerCase();

      // 1. Ellenőrizzük, létezik-e már a felhasználó
      this.authService.findUserByEmail(emailLower).subscribe(async (users) => {
        if (users.length > 0) {
          alert('Ezzel az email címmel már regisztráltak!');
          return;
        }

        // 2. Jelszó hashelése
        const hashedPassword = await this.hashPassword(this.registerData.password);

        // 3. Új felhasználó objektum
        const newUser = {
          username: this.registerData.username,
          email: emailLower,
          password: hashedPassword,
          metadata: { registeredAt: new Date().toISOString() },
        };

        // 4. Mentés a json-serverbe
        this.authService.register(newUser).subscribe((savedUser) => {
          const session = {
            id: savedUser.id,
            username: savedUser.username,
            email: savedUser.email,
          };
          this.authService.login(session);
          this.router.navigate(['/home']);
        });
      });
    } catch (e) {
      alert('Hiba a regisztráció során!');
    }
  }

  private async hashPassword(password: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
}
