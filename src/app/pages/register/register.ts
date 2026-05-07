// src/app/pages/register/register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth'; // Ellenőrizd a pontos útvonalat!

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
    role: 'student', // <-- ÚJ: Alapértelmezett szerepkör
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

        // 3. Új felhasználó objektum (a ROLE is bekerült!)
        const newUser = {
          username: this.registerData.username,
          email: emailLower,
          password: hashedPassword,
          role: this.registerData.role, // <-- ÚJ: Elmentjük a szerepkört
          metadata: { registeredAt: new Date().toISOString() },
        };

        // 4. Mentés a json-serverbe
        this.authService.register(newUser).subscribe((savedUser) => {
          const session = {
            id: savedUser.id,
            username: savedUser.username,
            email: savedUser.email,
            role: savedUser.role, // <-- ÚJ: A session is tudja, hogy ő micsoda
          };
          this.authService.login(session);
          // Ha admin, menjen az admin felületre, egyébként a home-ra
          if (session.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }
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
