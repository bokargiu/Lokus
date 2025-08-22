import { Component, Injectable } from "@angular/core";
import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface LoginResponse {
  token: string;
  role: 'customer' | 'company'; 
}

@Injectable({ providedIn: 'root'})
export class AuthService {
    private apiUrl = 'https://localhost:7101/api/auth/login';

    constructor (private http: HttpClient) {}

    login(username: string, password: string) {
    return this.http.post<LoginResponse>(this.apiUrl, {
        username,
        password
    });
    }

    saveToken(token:string){
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

      saveRole(role: string) {
    localStorage.setItem('role', role);
    }

    getRole(): string | null {
        return localStorage.getItem('role');
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    isLoggedIn():boolean {
        return !! this.getToken();
    }


}

