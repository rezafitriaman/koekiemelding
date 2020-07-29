import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.scss']
})
export class CrossComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }

}
