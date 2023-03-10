import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() placeHolderText:string | undefined;
  @Input() object : any;
  @Output() myoutput :EventEmitter<string> = new EventEmitter;
  outputString ="value comming from child";


  sendData(){
    this.myoutput.emit(this.outputString);
  }
}
