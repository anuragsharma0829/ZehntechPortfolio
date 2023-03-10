import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruemdComponent } from './truemd.component';

describe('TruemdComponent', () => {
  let component: TruemdComponent;
  let fixture: ComponentFixture<TruemdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruemdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruemdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
