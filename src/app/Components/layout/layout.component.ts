import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  contentData: string = 'Data From Content';
  @Output() myEvent = new EventEmitter();

  constructor() {
    console.log('1-ctor');
  }
  ngOnInit(): void {
    this.myEvent.emit(this.contentData);
  }
  
}
