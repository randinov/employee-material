import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {TableModule} from 'primeng/table';
import { EmployeesRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {InputTextModule} from 'primeng/inputtext';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'primeng/api';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EmployeesComponent } from './employee/employees.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddEmployeesComponent } from './add-employee/add-employee.component';
import { IconModule } from '@visurel/iconify-angular';
import { DeleteEmployeesComponent } from './delete-employee/delete-employee.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { DialogSaveComponent } from './dialog-save/dialog-save.component';
@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    MatAutocompleteModule,
    MatCardModule,
    EmployeesRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatInputModule,
    TableModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatMenuModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    SharedModule,
    MatToolbarModule,
    MatRadioModule,
    MatExpansionModule,
    MatProgressBarModule,
    IconModule,
    MatDividerModule
    
  ],
  declarations: [EmployeesComponent,AddEmployeesComponent,DeleteEmployeesComponent,DialogSaveComponent],
  providers: [EmployeeService]
})
export class EmployeeModule {}
