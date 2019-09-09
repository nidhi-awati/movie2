import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BenchesService } from '../benches.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:FormGroup
 

  constructor(private router: Router, private fb: FormBuilder,public http:BenchesService) {
    this.movie = this.fb.group({
      name: new FormControl(),
      lang: new FormControl(),
      gen: new FormControl(),
    })

   }

  ngOnInit() {
  }
move(a)
{
console.log(a)
this.http.movieUser(a).add(data =>{
  console.log("1",data)
})
}
list(){
  this.router.navigateByUrl("album");
}
}
