import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BenchesService {
  baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': 'my-auth-token'
    })
  }
  constructor(private http:HttpClient) { }

  registerUser(values) {
    let body = {
      name: values.name,
      password: values.pass,
      confirmpassword: values.cpass
    }
    
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users', body).subscribe(result => {
      console.log("1", result)
    })
  }
  loginUser(values) {
    let data = {
      name: values.name,
      pass: values.pass,
      
    }
    
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate', data,this.httpOptions).pipe(map(data => {console.log("3",data)})).subscribe(result => { 
    })
  }

  
 
  movieUser(values) {
    let body = {
      id:JSON.parse(localStorage.getItem("logindata")).success._id,
       MovieName: values.name,
      Language: values.lang,
    Genre: values.gen
    }
    
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies', body).subscribe(result => {
      console.log("3", result)
    })
  }
}
  