import { Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent, canActivate: [() => Inject(LoginGuard).canActivate()] },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((a) => a.RoomsModule), canActivate: [() => Inject(LoginGuard).canActivate()]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule), canActivate: [() => Inject(LoginGuard).canActivate()]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
