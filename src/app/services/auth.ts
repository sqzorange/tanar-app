// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private loggedIn = false;
  private currentUser: any = null;

  constructor(private http: HttpClient) {
    const storedSession = localStorage.getItem('medical_app_current_user');
    if (storedSession) {
      this.loggedIn = true;
      this.currentUser = JSON.parse(storedSession);
    }
  }

  // Regisztráció: Elküldi az új felhasználót a db.json-be
  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Felhasználó keresése email alapján
  findUserByEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`);
  }

  login(userData: any) {
    this.loggedIn = true;
    this.currentUser = userData;
    localStorage.setItem('medical_app_current_user', JSON.stringify(userData));
  }

  logout() {
    this.loggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('medical_app_current_user');
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
