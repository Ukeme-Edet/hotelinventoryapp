import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: "", redirectTo: "rooms",pathMatch: "full" },
  { path: "employee", component: EmployeeComponent },
  { path: "rooms", component: RoomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
