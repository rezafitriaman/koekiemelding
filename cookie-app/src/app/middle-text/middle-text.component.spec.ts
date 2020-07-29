import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTextComponent } from './middle-text.component';

describe('MiddleTextComponent', () => {
  let component: MiddleTextComponent;
  let fixture: ComponentFixture<MiddleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
