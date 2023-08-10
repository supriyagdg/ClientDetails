import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

constructor(private api:ApiService,private router: Router)
{

}

  Login(frm:any)
  {
    console.log(frm);
    
    this.api.LoginInfo(frm.value).subscribe((res)=>{
      console.log(res);
      
    })
      alert("Login Successfully!!")
      this.router.navigate(['/dashboard']); 
  }


}
