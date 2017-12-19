import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecreateComponent } from './moviecreate.component';

describe('MoviecreateComponent', () => {
  let component: MoviecreateComponent;
  let fixture: ComponentFixture<MoviecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
