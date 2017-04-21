import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WymianaComponent } from './wymiana.component';

describe('WymianaComponent', () => {
  let component: WymianaComponent;
  let fixture: ComponentFixture<WymianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WymianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WymianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
