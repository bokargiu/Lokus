import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Verifica se está logado
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    // Pega role do token
    const userRole = this.authService.getRoleFromToken();

    // Pega role que a rota exige (se tiver)
    const expectedRole = route.data['role'] as string | undefined;

    if (expectedRole && userRole !== expectedRole) {
      // Se a role não bate, redireciona para a página correta do usuário
      if (userRole === 'company') {
        this.router.navigate(['/company/stablishments']); 
      } else if (userRole === 'customer') {
        this.router.navigate(['/customer/home']); 
      } else {
        this.router.navigate(['/unauthorized']); 
      }
      return false;
    }

    return true;
  }
}
