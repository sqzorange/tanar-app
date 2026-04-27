// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  async onLogin() {
    const emailLower = this.loginData.email.toLowerCase();
    const hashedPw = await this.hashPassword(this.loginData.password);

    this.authService.findUserByEmail(emailLower).subscribe((users) => {
      const user = users.find((u) => u.password === hashedPw);

      if (user) {
        this.authService.login({ id: user.id, username: user.username, email: user.email });
        this.router.navigate(['/home']);
      } else {
        alert('Hibás email vagy jelszó!');
      }
    });
  }

  private async hashPassword(password: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
}
