import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationnService } from '../services/reservationn.service';

@Component({
  selector: 'app-reservation-form',
  imports: [ReactiveFormsModule,
    MatIconModule,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatLabel,
    MatSelectModule,
    MatInputModule,
    MatLabel,
    MatOptionModule,],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent {
  formbuilder = inject(FormBuilder);
  #resSevice = inject(ReservationnService);


  reservationForm= this.formbuilder.group({
    id: [, { nonNullable: true }],
      name: [, { nonNullable: true }],
      lastname: [, { nonNullable: true }],
      gender: [, { nonNullable: true }],
      checkinDate: [, { nonNullable: true }],
      checkoutDate: [, { nonNullable: true }],
      email: [, { nonNullable: true }]
    });

  submit(){
   //this.#resSevice.addReservation(this.reservationForm.value)
  }

  close(){}
}
