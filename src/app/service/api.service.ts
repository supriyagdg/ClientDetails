import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http:HttpClient) { }

getData()
{
  return this.http.get("http://localhost:3000/Info");
}

postData(data:any)
{
  return this.http.post("http://localhost:3000/Info",data)
}

LoginInfo(data:any)
{
  return this.http.post("http://localhost:3000/Login",data)
}


getProductById(id:any)
{
 return this.http.get("http://localhost:3000/Info/"+id)
}
}


