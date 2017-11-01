import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import{ NgFor} from '@angular/common';

@Component({
  selector: 'app-header',
   templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','../app.component.scss']
})
export class HeaderComponent{
  name: string = "FILTER BY STATUS";
  names: string[] = ["PUBLISHED", "NOT PUBLISHED", "PENDING", "FILTER BY STATUS"];

  storeName: string = "FILTER BY STORE";
  stores: string[] = ["Conberro", "Eastland", "Grand Central", "Robina","FILTER BY STORE"];

 @Output()
 fileterBody:EventEmitter<any>=new EventEmitter<any>();


  myfilter(myOption:string,myOption2:string)
  {
    this.fileterBody.emit({opt1:myOption,opt2:myOption2});
    
  }

}
