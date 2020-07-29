import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { SwitchPackage } from './switch-package-model';
import {TimelineMax, gsap} from 'gsap';

enum Direction {
  Left,
  Right,
}

@Component({
  selector: 'app-switch-package',
  templateUrl: './switch-package.component.html',
  styleUrls: ['./switch-package.component.scss']
})
export class SwitchPackageComponent implements OnInit {
  @Input() switchPackage: SwitchPackage;
  @Input() index: number;
  @Output() dansCookieSelected = new EventEmitter<[SwitchPackage, HTMLElement]>();
  @ViewChild('dansCookie') dansCookie: ElementRef; 
  public redButton: Direction = Direction.Left;
  public yellowButton: Direction = Direction.Left;
  public greenButton: Direction = Direction.Left;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dansCookieAnimation();
  }
  
  onSwitch(switchPackage: SwitchPackage) {
    if(switchPackage.color === 'red' && this.redButton === Direction.Left) {
      this.redButton =  Direction.Right;
    } else if(this.redButton === Direction.Right) {
      this.redButton = Direction.Left
    }
    
    if(switchPackage.color === 'green' && this.greenButton === Direction.Left) {
      this.greenButton = Direction.Right;
    } else if(this.greenButton === Direction.Right) {
      this.greenButton = Direction.Left
    }

    if(switchPackage.color === 'yellow' && this.yellowButton === Direction.Left) {
      this.yellowButton = Direction.Right;
    } else if(this.yellowButton === Direction.Right) {
      this.yellowButton = Direction.Left
    }
    
    this.dansCookieSelected.emit([switchPackage, this.dansCookie.nativeElement]);
    this.move(this.dansCookie.nativeElement);
  }
  
  move(targetSvg: SVGAElement) {
    if(this.redButton === Direction.Right || 
      this.yellowButton === Direction.Right || 
      this.greenButton === Direction.Right) {
      gsap.to(targetSvg, {x: 105, ease: "Power1.easeOut", duration: 0.5});
    }else {
      gsap.to(targetSvg, {x: 0, ease: "Power1.easeOut", duration: 0.5});
    }   
  }

  dansCookieAnimation(){
    const duration: number = 0.5;
    if(Number(this.dansCookie.nativeElement.getAttribute('data-index')) === 0) {
      const tl = new TimelineMax({repeat: 0, repeatDelay:3});

      tl 
      .to(this.dansCookie.nativeElement, duration, {y: 10, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: 0, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: -10, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: 0, ease:"Elastic.easeOut.config(1, 0.3)"})

      return tl;
    }
    
    if(Number(this.dansCookie.nativeElement.getAttribute('data-index')) === 1) {
      const tl = new TimelineMax({repeat: 0, repeatDelay:5, paused: true});

      tl 
      .to(this.dansCookie.nativeElement, duration, {y: 10, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: 0, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: -10, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: 0, ease:"Elastic.easeOut.config(1, 0.3)"})

      setTimeout(() =>{ tl.play() }, 1000);

      return tl;
    } 

    if(Number(this.dansCookie.nativeElement.getAttribute('data-index')) === 2) {
      const tl = new TimelineMax({repeat: 0, repeatDelay:3, paused: true});

      tl 
      .to(this.dansCookie.nativeElement, duration, {y: 10, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: 0, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: -10, ease:"Elastic.easeOut.config(1, 0.3)"})
      .to(this.dansCookie.nativeElement, duration, {y: 0, ease:"Elastic.easeOut.config(1, 0.3)"})

      setTimeout(() =>{ tl.play() }, 2000);
      return tl;
    }
    
  }
}
