import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SwitchPackage } from '../switch-package/switch-package-model';
import {TimelineMax} from 'gsap';
import {gsap} from 'gsap';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {
  public allColors: Array<string> = [];
  @ViewChild('rightEye') rightEye: ElementRef; 
  @ViewChild('leftEye') leftEye: ElementRef;  
  @ViewChild('mouthOpen') mouthOpen: ElementRef; 
  @ViewChild('monster') monster : ElementRef;
  @Input() public set dansCookiePackage(dansCookiePackage: [SwitchPackage, SVGAElement]) {
    if(dansCookiePackage) {
      let selectedColor = dansCookiePackage[0].color;
      this.eyeColor(selectedColor);
    }
    
    this.ifAllButtonHasBeenClicked()
  }
   
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.monsterAnimation();
  }

  eyeColor(selectedColor: string) {
    gsap.to(this.leftEye.nativeElement, {fill:selectedColor, duration: 1});
    gsap.to(this.rightEye.nativeElement, {fill:selectedColor, duration: 1});

    if(this.allColors.indexOf(selectedColor) === -1) {
      this.allColors.push(selectedColor);
    }
  }

  ifAllButtonHasBeenClicked() {
    if(this.allColors.length === 3) {
      gsap.to(this.mouthOpen.nativeElement, {opacity:1, duration: 1});
    }
  }

  monsterAnimation() {
    const tl = new TimelineMax({repeat: -1, repeatDelay:6 });
    const duration: number = 0.5;

    tl 
      .to(this.monster.nativeElement, duration, {rotate: 10, ease:"back.out(1.7)"})
      .to(this.monster.nativeElement, duration, {rotate: 0})
      .to(this.monster.nativeElement, duration, {rotate: -10, ease:"back.out(1.7)"})
      .to(this.monster.nativeElement, duration, {rotate: 0})

      return tl;
  }
}