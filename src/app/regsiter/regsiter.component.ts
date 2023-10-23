import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.scss']
})
export class RegsiterComponent {
  email: string ="";
  password: string ="";
  clientname: string="";
  constructor(private http: HttpClient, private router: Router )
  {
  }
  save()
  {
  
    let bodyData = {
      "clientname": this.clientname,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:8081/api/v1/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
        this.router.navigateByUrl('/login');
    });
  }
}