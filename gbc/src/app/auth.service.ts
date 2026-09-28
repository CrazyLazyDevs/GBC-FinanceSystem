import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';

interface LoginResponse {
  token: string;
  user: { email: string };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'gbc-auth-token';

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/api/login`, { email, password })
      .pipe(tap(({ token }) => localStorage.setItem(this.tokenKey, token)));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  validateSession(): Observable<unknown> {
    return this.http.get(`${environment.apiUrl}/api/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}` },
    });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
