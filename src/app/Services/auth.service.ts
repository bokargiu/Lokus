import { Component, Injectable } from "@angular/core";
import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { jwtDecode, JwtPayload, JwtDecodeOptions, JwtHeader } from 'jwt-decode';

export interface LoginResponse {
  token: string
}

@Injectable({ providedIn: 'root'})
export class AuthService {
    private apiUrl = 'http://localhost:5105/api/Auth/login';

    constructor (private http: HttpClient) {}

    login(username: string, password: string) {
    return this.http.post<LoginResponse>(this.apiUrl, {
        "username": username,
        "password": password
    });
    }

    saveToken(token:string){
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

      saveRole(role: string) {             // Esse acho que deveriamos tirar,  
    localStorage.setItem('role', role);    // pois a token já manda a role e o token é const.
    }

    getDecoded(): any {
      let tk = this.getToken();
      if(tk != null) {
        const decoded = jwtDecode<JwtPayload>(tk)
        return decoded
      }
        return
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    isLoggedIn():boolean {
        return !! this.getToken();
    }


}

