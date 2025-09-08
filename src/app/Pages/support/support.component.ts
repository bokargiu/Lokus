import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

openRecoverPassword() {
  window.open('http://localhost:4200/esqueceu-senha', '_blank');
}

openQandA(){
  window.open('http://localhost:4200/perguntas', '_blank');
}


}
