import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowportComponent } from './showport.component';

describe('ShowportComponent', () => {
  let component: ShowportComponent;
  let fixture: ComponentFixture<ShowportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
