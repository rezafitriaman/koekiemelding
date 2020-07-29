import { Component, Output, ElementRef, ViewChild } from '@angular/core';
import { SwitchPackage } from './switch-package/switch-package-model';
import {gsap} from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  switchPackage : SwitchPackage[] = [
    new SwitchPackage('red', 'Statistieken'),
    new SwitchPackage('yellow', 'Essentieel'),
    new SwitchPackage('green', 'Voorkeuren')
  ];
  @Output() selectedDansCookiePackage: [SwitchPackage, SVGAElement];
  @ViewChild('container') container: ElementRef; 

  onDansCookieSelected(targetDansCookie: [SwitchPackage, SVGAElement]) {
    this.selectedDansCookiePackage = targetDansCookie;
  }

  onClose() {
    gsap.to(this.container.nativeElement, {opacity: 0, duration: 0.5})
  }
}
