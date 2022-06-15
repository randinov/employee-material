import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username:any;
  dateToday : number =  Date.now();
  greeting : boolean = true;
  places: Array<Place> = [];
  greet:any;
  constructor(private router:Router) {
  }
  ngOnInit() {
    this.username = localStorage.getItem('username')
    var myDate = new Date();
    var hrs = myDate.getHours();

    if (hrs < 10)
       this.greet = 'GOOD MORNING ⛅';
    else if (hrs >= 10 && hrs <= 17)
    this.greet = 'GOOD AFTERNOON ☀️';
    else if (hrs >= 17 && hrs <= 24)
    this.greet = 'GOOD EVENING 🌙';
      
    document.getElementById('greeting')?.innerHTML 
    '<b>' +  this.greet + '</b>!';   
    console.log( this.greet) 
  }

  

  
}
