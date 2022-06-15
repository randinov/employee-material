
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeesComponent implements OnInit {
  loadingPage: boolean = true;
  formGroup: FormGroup | any;
  currentData: any;
  listBank: any;
  listBankGssk: any;
  selectedBank: any;
  gender: any;
  kodeBank: any = '';
  icClose = icClose;
  isConfirmation = false;
  isLoading = false;
  submitted = false;
  titleDialog: string;
  functionDialog: string;
  listGrouping: any[] = [];
  listGender: any[] = [];
  isSpinerLoad: boolean = false;
  options = ["The Nerd Herd",
    "Back Benchers",
    "Game of Phones",
    "Tech Turtles",
    "Mavericks", "Justice League", "The Squad", "Family Forever", "Marvels", "Strangers Things"];

  maxDate: Date | any;
  filteredOptions: any
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<AddEmployeesComponent>,
    private service: EmployeeService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.titleDialog = data.title;
    this.functionDialog = data.function;
    this.listGender = data.listGender;
    this.currentData = data.modelData;

  }


  ngOnInit() {
    this.initForm()
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() - 12 * 18);
  }

  get f() {
    return this.formGroup.controls;
  }

  initForm(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      group: ['', [Validators.required]],
      status: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      basicSalary: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      description: ['', [Validators.required]],

    });

    this.formGroup.get('group').valueChanges.subscribe((res: any) => {
      this.filterData(res);

    })

    this.formGroup.get("gender").valueChanges.subscribe((res: any) => {

    })


    if (this.currentData) {
      const index = this.listGender?.findIndex(
        (item: any) => item['gender'] === this.currentData.gender
      );
      const gender = index ? this.listGender[index] : '';
      this.f.gender.setValue(gender ? gender : '');
      this.f.username.setValue(this.currentData.username);
      this.f.firstName.setValue(this.currentData.firstName);
      this.f.lastName.setValue(this.currentData.lastName);
      this.f.email.setValue(this.currentData.email);
      this.f.group.setValue(this.currentData.group);
      this.f.basicSalary.setValue(this.currentData.basicSalary);
      this.f.status.setValue(this.currentData.status);
      this.f.birthDate.setValue(this.currentData.birthDate);
      this.f.gender.setValue(this.currentData.gender);
      this.f.description.setValue(this.currentData.description);
    }

  }

  filterData(enteredData: any) {
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  onSubmit() {
    // console.log('check', this.formGroup, this.formGroup.valid);
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    } else {
      this.isConfirmation = true;
    }
  }

  doSubmit() {
    this.isLoading = true;
    const requestBody = {
      id: this.currentData ? this.currentData.id : 0,
      username: this.f.username.value.trim() ? this.f.username.value : '',
      firstName: this.f.firstName.value.trim() ? this.f.firstName.value : '',
      lastName: this.f.lastName.value.trim() ? this.f.lastName.value : '',
      email: this.f.email.value ? this.f.email.value : '',
      group: this.f.group.value ? this.f.group.value : '',
      description: this.f.description.value ? this.f.description.value : '',
      basicSalary: this.f.basicSalary.value ? this.f.basicSalary.value : '',
      status: this.f.status.value ? this.f.status.value : '',
      gender: this.f.gender.value ? this.f.gender.value : '',
      birthDate: this.f.birthDate.value ? this.f.birthDate.value : ''
    }

    if (this.functionDialog === 'Add') {
      this.service.postTblEmployee(requestBody).subscribe(
        (res: any) => {
          if (res) {
            this.snackBar.open("Add Successfully", 'Dismiss', { duration: 3000 });
            this.dialogRef.close('Add OK');
            this.isLoading = false;
          }

        },
        (err: any) => {
          console.log('error', err);
          this.isLoading = false;
          this.snackBar.open('Opsss.. ' + err.name, 'Error', {
            duration: 10000,
          });
        }
      )
    } else {
      const id = this.currentData.id;
      this.service.patchTblEmployee(id, requestBody).subscribe(
        (res: any) => {
          if (res) {
            this.snackBar.open("Edit Successfully", 'Dismiss', { duration: 3000 });
            this.dialogRef.close('Edit OK');
            this.isLoading = false;
          }
        },
        (err: any) => {
          console.log('error', err);
          this.isLoading = false;
          this.snackBar.open('Opsss.. ' + err.name, 'Error', {
            duration: 10000,
          });
        }
      )
    }
  }

  getGender() {
    this.service.getGenderList().subscribe((res: any) => {
      if (res) {
        this.listGrouping = res
        console.log(res)
      }
    },
      (err: any) => {
        console.log('error', err);
        this.isLoading = false;
        this.snackBar.open('Opsss.. ' + err.name, 'Error', {
          duration: 10000,
        });
      });
  }

  getNames() {
    this.service.getTblEmployee().subscribe(response => {
      this.options = response;
      this.filteredOptions = response;
    })
  }

  // Validate Number Only
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getError(formControlName: string, validatorName: string): string {
    return this.determineErroMessage(formControlName, validatorName);
  }

  private determineErroMessage(formControlName: string, validatorName: string): string {
    switch (formControlName) {
      case 'email': return 'You must enter a valid email'
      default: return 'You must enter a value'
    }
  }

}
