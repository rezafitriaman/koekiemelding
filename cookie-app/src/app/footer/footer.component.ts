import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('text') text: ElementRef; 

  constructor() {}

  ngOnInit(): void {}
  
  ngAfterViewInit() {
    gsap.to(this.text.nativeElement, {x:100 , opacity: 1, duration: 0.5})
  }
}
