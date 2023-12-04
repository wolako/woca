import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontVideoComponent } from './mont-video.component';

describe('MontVideoComponent', () => {
  let component: MontVideoComponent;
  let fixture: ComponentFixture<MontVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
