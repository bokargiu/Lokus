import { Component } from '@angular/core';
import { Place } from 'src/app/Models/company.model';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrl: './company-management.component.css'
})
export class CompanyManagementComponent {
  places: Place[] = [];

  addPlace() {
    const newPlace: Place = {
      id: Date.now(),
      name: 'Novo Espaço',
      description: '',
      reservations: []
    };
    this.places.push(newPlace);
  }
  editPlace(place: Place) {
    const newName = prompt('Editar nome do espaço:', place.name);
    if (newName !== null) {
      place.name = newName;
    }
    const newDesc = prompt('Editar descrição:', place.description);
    if (newDesc !== null) {
      place.description = newDesc;
    }
  }

    deletePlace(index: number) {
    if (confirm('Deseja realmente excluir este espaço?')) {
      this.places.splice(index, 1);
    }
  }
}
