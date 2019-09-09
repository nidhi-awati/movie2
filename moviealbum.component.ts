import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviealbum',
  templateUrl: './moviealbum.component.html',
  styleUrls: ['./moviealbum.component.css']
})
export class MoviealbumComponent implements OnInit {

  list:any;
  constructor(public http:HttpClient,private router:Router) { }

  ngOnInit() {
    let headers={'id':JSON.parse(localStorage.getItem('logindata')).success._id}
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+headers.id).subscribe(dat=>{this.list=dat['success'].movies})  
  }
  album(){
    this.router.navigateByUrl("movie");
  }
 
}
