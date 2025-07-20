import { Component, Injectable } from "@angular/core";
import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root'})
export class AuthService {
    private apiUrl = 'https://localhost:7101/api/auth/login';

    constructor (private http: HttpClient) {}

    login (username:string, password: string) {
        return this.http.post<{token:string}>(`${this.apiUrl}`, {
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

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn():boolean {
        return !! this.getToken();
    }


}

