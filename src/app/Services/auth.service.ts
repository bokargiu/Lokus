import { Component, Injectable } from "@angular/core";
import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export interface LoginResponse {
  token: string;
  role: 'customer' | 'company'; 
} 

interface DecodedToken {
  stablishmentId: string;
  exp: number;
  iat: number;
}

@Injectable({ providedIn: 'root'})
export class AuthService {
    private apiUrl = 'https://localhost:7101/api/auth/login';

    private loggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());
    public isLoggedInObservable = this.loggedIn$.asObservable();


    constructor (private http: HttpClient) {}

    login(username: string, password: string) {
    return this.http.post<LoginResponse>(this.apiUrl, {
        username,
        password
    });
    }

    saveToken(token: string) {
    localStorage.setItem('token', token);
    this.loggedIn$.next(true); // avisa que está logado
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

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.loggedIn$.next(false);

        // redireciona sempre
        window.location.href = '/';
        }
    
    isLoggedIn():boolean {
        return !! localStorage.getItem('token');
    }   

    getRoleFromToken(): string | null {
        const token = this.getToken();
        if (!token) {
            console.warn('Token não encontrado');
            return null;
            }

        try {
            const decoded: any = jwtDecode(token);  // chama a função diretamente
            console.log('decoded token:', decoded);

            const role = decoded.role ?? decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            console.log('role from token:', role);

            return role ? role.toLowerCase() : null;

        } catch (error) {
            console.error('Token inválido', error);
            return null;
        }

    }

    getDecoded(): any {
        let tk = this.getToken();
        if (tk != null){
            const decoded = jwtDecode<JwtPayload>(tk)
            return decoded
        }
        return
    }

}



