import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

const routes: Routes = [
  { path: "", redirectTo: "rooms",pathMatch: "full" },
  { path: "employee", component: EmployeeComponent },
  { path: "rooms/:id", component: RoomsBookingComponent },
  { path: "rooms", component: RoomsComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
