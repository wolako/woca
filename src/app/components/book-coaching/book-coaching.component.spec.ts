import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCoachingComponent } from './book-coaching.component';

describe('BookCoachingComponent', () => {
  let component: BookCoachingComponent;
  let fixture: ComponentFixture<BookCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCoachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
