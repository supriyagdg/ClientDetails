import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.css']
})
export class DetailedInfoComponent {
  public data:any;
  public details:any;
  constructor(private actRoute:ActivatedRoute, private api:ApiService)
  {
    this.data=this.actRoute.snapshot.paramMap.get('info')

    this.data && this.api.getProductById(this.data).subscribe((res)=>{
      console.log(res);
      this.details=res;
     })
   
    
  }
}
