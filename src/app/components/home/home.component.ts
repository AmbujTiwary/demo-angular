import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: any;
  constructor(private loginService : LoginService) { 
    this.email = this.loginService.myEmail;
  }
  
  ngOnInit(): void {
    
  }

}
