import { Component,EventEmitter, Output  } from '@angular/core';
import { Space, SpaceService } from 'src/app/Services/space.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-add-space',
  templateUrl: './card-add-space.component.html',
  styleUrl: './card-add-space.component.css'
})
export class CardAddSpaceComponent {
@Output() spaceAdded = new EventEmitter<Space>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private spaceService: SpaceService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      description: [''],
      price: [0, [Validators.required, Validators.min(1)]],
      priceEnum: ['PorHora', Validators.required]
    });
  }

   submit() {
    if (this.form.invalid) return;

    const newSpace = this.form.value;
    newSpace.stablishmentId = 'INSIRA_ID_DO_ESTABELECIMENTO'; // Pode vir do input ou login

    this.spaceService.addSpace(newSpace).subscribe({
      next: (res) => {
        this.spaceAdded.emit(res);
        this.form.reset();
      },
      error: (err) => console.error(err)
    });
  }


}
