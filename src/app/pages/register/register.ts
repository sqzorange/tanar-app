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

  onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('A két jelszó nem egyezik meg!');
      return;
    }

    console.log('Registration attempt for:', this.registerData.username);

    // Regisztráció után automatikusan beléptetjük (szimuláció)
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
