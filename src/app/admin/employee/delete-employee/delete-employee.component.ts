
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

  @Component({
    selector: 'app-delete-employee',
    templateUrl: './delete-employee.component.html',
    styleUrls: ['./delete-employee.component.scss']
  })

  export class DeleteEmployeesComponent implements OnInit {
    loadingPage: boolean = true;
    employee:any[]=[];
    id:any;
    icClose = icClose;
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<DeleteEmployeesComponent>,
      private snackbar: MatSnackBar,
      private service:EmployeeService) {
      this.id = data.id;}

    ngOnInit() {
      console.log(this.id)

    }
  
    doDelete() {
      this.service.getDeleteEmployee(this.id).subscribe(
          (res: any) => {
              this.snackbar.open("Delete Successfully", 'Dismiss', { duration: 3000 });
              this.dialogRef.close('Delete OK');
          }, (err: any) => {
              console.log('error', err);
              this.snackbar.open(err, 'Error', {
                  duration: 7000
              });
          }
      );
  }
  
    
  }






  