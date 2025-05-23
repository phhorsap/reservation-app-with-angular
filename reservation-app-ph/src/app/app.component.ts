import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReservationFormComponent,ReservationListComponent
    

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reservation-app-ph';
}
