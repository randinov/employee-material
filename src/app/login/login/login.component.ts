import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  isLoading: boolean = false;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  inputType = 'password';
  visible = false;
  constructor(private router: Router,private fb: FormBuilder,public snackBar: MatSnackBar) {
    this.loadForm();
  }

  ngOnInit() {
 
  }
  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }

  loadForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
    } else {
      this.inputType = 'text';
      this.visible = true;
    }
  }


  loginData() {
    this.isLoading = true;
    let item = {
      userName: this.loginForm.controls['userName'].value,
      password: this.loginForm.controls['password'].value
    }
    console.log(item);
    if(item.userName === "test.mandiri" && item.password === "P@ssw0rd"){
       localStorage.setItem('isLoggedin', 'true');
       localStorage.setItem('username',item.userName);
      this.router.navigate(['/dashboard']);
      this.snackBar.open("Login Successfully", 'Dismiss', { duration: 3000 });
    } else {
      this.snackBar.open("Incorrect Username or Password", 'Dismiss', { duration: 3000 });
      this.isLoading = false;
      return false;
      
    }
  }

  
}



