import { Component, OnInit,EventEmitter,Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displaystatus:boolean=false;
  filterOption:string="all";
  filterOptionStore:string="all";
  @Output()
  fileterBody:EventEmitter<string>=new EventEmitter<string>();
  displayBody(status:boolean)
  { 
    this.displaystatus=!this.displaystatus;
  }

  myFilterBody(filterOption:any)
  {
    this.displaystatus=true;
    this.filterOption=filterOption.opt1;
    this.filterOptionStore=filterOption.opt2;
    if(filterOption.opt1=='FILTER BY STATUS')
    {
      this.filterOption='all';
    }
    if(filterOption.opt2=='FILTER BY STORE')
    {
      this.filterOptionStore='all';
    }
  }
 }
