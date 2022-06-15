import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employee/employees.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  // { path: 'jaminan-kendaraan', component: JaminanKendaraanComponent },
  // { path: 'jaminan-deposito', component: JaminanDepositoComponent },
  // { path: 'jaminan-sertifikat', component: JaminanSertifikatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
