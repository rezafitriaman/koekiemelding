import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPackageComponent } from './switch-package.component';

describe('SwitchPackageComponent', () => {
  let component: SwitchPackageComponent;
  let fixture: ComponentFixture<SwitchPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
