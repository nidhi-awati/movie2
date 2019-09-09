import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BenchesService } from '../benches.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup
  constructor(public router:Router,public http:BenchesService) { 
    this.loginform=new FormGroup({
    name:new FormControl(''),
      pass:new FormControl('')
     
    })
  }


  ngOnInit() {
  }
  loginpage(values){
    console.log(values)
    this.http.loginUser(values).add(data => {
      console.log("3", data)
    })
  }
  move(){
    this.router.navigateByUrl('movie');
  }
}
