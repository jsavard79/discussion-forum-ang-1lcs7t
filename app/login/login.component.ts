import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/service/login.service';
import{Router}from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = "a"
  pass = "a"
  constructor(private logSer: LoginService,private rt:Router) { }

  ngOnInit() {
  }

  validate() {
   if( this.logSer.validate(this.user, this.pass)==true){

this.rt.navigate([''])
   }

  }

}
