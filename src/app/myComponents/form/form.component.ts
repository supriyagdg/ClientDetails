import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private api:ApiService) {
    
  }

  onSubmit(frm:any)
  {
     this.api.postData(frm.value).subscribe((res:any)=>{
      console.log(res);
      alert("Data Saved Successfully!!")
     })
  }
}
