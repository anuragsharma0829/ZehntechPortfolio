import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsmmComponent } from './assetsmm.component';

describe('AssetsmmComponent', () => {
  let component: AssetsmmComponent;
  let fixture: ComponentFixture<AssetsmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsmmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
