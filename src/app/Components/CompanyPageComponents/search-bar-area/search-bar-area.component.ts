import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthGuard } from 'src/app/Services/authguard.service';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search-bar-area',
  templateUrl: './search-bar-area.component.html',
  styleUrl: './search-bar-area.component.css'
})
export class SearchBarAreaComponent implements OnInit, OnDestroy{
@Input() sidenav!: MatSidenav;
private loginSub!: Subscription

   constructor(
    private authService: AuthService,
    private router: Router,
  ) {} 

    ngOnInit(): void {
    this.loginSub = this.authService.isLoggedInObservable.subscribe(isLogged => {
      if (!isLogged) {
        this.router.navigate(['']); // redireciona imediatamente
      }
    });
  }
    ngOnDestroy(): void {
    this.loginSub?.unsubscribe();
    }
    exit() {
    this.authService.logout(); 
    this.sidenav?.close(); 
  }
}
