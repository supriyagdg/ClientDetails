import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
public allData:any;

constructor(private api:ApiService)
{
  this.api.getData().subscribe((res)=>{
    console.log(res);
    this.allData=res;
    
  })
}

// ngOnDestroy() {
//   this.allData.unsubscribe()
// }

}
