
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';  
import { EmployeeService } from 'src/app/services/employee.service';
import { DeleteEmployeesComponent } from '../delete-employee/delete-employee.component';
import { AddEmployeesComponent } from '../add-employee/add-employee.component';

  @Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
  })

  export class EmployeesComponent implements OnInit {
    
    loadingPage: boolean = true;
    employee:any[]=[]
    genderList:any[]=[]
    constructor(private router:Router,private snackbar:MatSnackBar,
    private service:EmployeeService,public dialog: MatDialog) {}

    ngOnInit() {
      this.getEmployee()
      this.getDataUser()
    }
  
    getEmployee(){
      this.service.getTblEmployee().subscribe(
        res =>{ 
          if(res){
          this.employee = res
          this.loadingPage = false
          }
        },
        (error: any) => {
          // this.snackbar.open(error.error, 'Error', {
          //     duration: 7000
          //   });
          }
      )
    }

    getDataUser() {
      this.service.getGenderList().subscribe(
        (res: any) => {
          this.genderList = res;
        },
        (error:any) => {
          console.log('error', error);
  
          this.snackbar.open(error['message'], 'Error', {
            duration: 7000,
          });
        }
      );
    }


  
    dialogTambah() {    
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.width = '500px';
      dialogConfig.data = {
        title: "Add",
        function: "Add",
        listGender: this.genderList
      }
      const dialogRef = this.dialog.open(AddEmployeesComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        if (result === 'Add OK') {
          this.getEmployee();
      }
      });
    
    }

    editDialog(id: any) {
      const index = this.employee.findIndex(item => item["id"] === id);
      const modelData = this.employee[index];
      console.log(modelData)
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.width = '500px';
      dialogConfig.data = {
        title: "Update",
        function: "Edit",
        modelData: modelData,
        listGender: this.genderList,
    }
  
      const dialogRef = this.dialog.open(AddEmployeesComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (result === 'Edit OK') {
          this.getEmployee();
        }
      });
    }
       
    dialogDelete(id:any) {    
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.data = {id};
      const dialogRef = this.dialog.open(DeleteEmployeesComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        if (result === 'Delete OK') {
          this.getEmployee();
      }
      });
    }
    
    getEventValue($event:any) :string {
        return $event.target.value;
     } 
    }
  