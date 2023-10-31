import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerNavbarComponent } from './trainer-navbar.component';

describe('TrainerNavbarComponent', () => {
  let component: TrainerNavbarComponent;
  let fixture: ComponentFixture<TrainerNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerNavbarComponent]
    });
    fixture = TestBed.createComponent(TrainerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
