import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fullName: string = "";
  @Output() nameEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  submit(){
    this.nameEmitter.emit(this.fullName);
  }

}
