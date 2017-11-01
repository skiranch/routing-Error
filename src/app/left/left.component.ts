import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {
@Output()
 showbody:EventEmitter<boolean> =new EventEmitter<boolean>();

 displayBody()
 {
   this.showbody.emit(true);
   
 }
}
