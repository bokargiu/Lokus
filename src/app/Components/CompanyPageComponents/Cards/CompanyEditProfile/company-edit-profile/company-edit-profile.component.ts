import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-company-edit-profile',
  templateUrl: './company-edit-profile.component.html',
  styleUrl: './company-edit-profile.component.css'
})
export class CompanyEditProfileComponent implements OnInit{
stablishmentId!: string; 

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.stablishmentId = params['stablishmentId'];
      console.log('ID do estabelecimento no editar-perfil:', this.stablishmentId);
    });
  }
}
