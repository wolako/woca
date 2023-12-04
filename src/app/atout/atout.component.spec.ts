import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtoutComponent } from './atout.component';

describe('AtoutComponent', () => {
  let component: AtoutComponent;
  let fixture: ComponentFixture<AtoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
