import { Injectable } from '@angular/core';
import { Reservation } from '../shared/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationnService {

  reservations :Reservation[]=[];
 // CRUD
  getAllReservation():Reservation[]{
    return this.reservations;

  }
  getReservation(id:string) :Reservation | undefined{
    return this.reservations.find(res=> 
    res.id===id
    )
  }
  addReservation(reservation: Reservation ): void{
   this.reservations.push(reservation);
  }
  deleteReservation(id:string):void{
    const idx = this.reservations.findIndex(
      res=> res.id===id
    )
    this.reservations.splice(idx,1)
  }

  updateReservation(updateRes:Reservation) :void{

    const idx =this.reservations.findIndex(res=> res.id===updateRes.id);
    this.reservations[idx]=updateRes;
  }
}
