import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BenchesService } from '../benches.service';
import{FormBuilder,FormControl} from "@angular/forms"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: any;

  constructor(private router: Router, private fb: FormBuilder,
     private http: BenchesService) {
    this.registerForm = this.fb.group({
      name: new FormControl(),
      pass: new FormControl(),
      cpass: new FormControl(),
    })

   }

  ngOnInit() {
  }
  log() {
    this.router.navigateByUrl("login")
  }
  register(values) {
    console.log(values)
    this.http.registerUser(values).add(data => {
      console.log("2", data)
    })
  }
  }
