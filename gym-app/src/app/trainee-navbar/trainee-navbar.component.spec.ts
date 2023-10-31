import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeNavbarComponent } from './trainee-navbar.component';

describe('TraineeNavbarComponent', () => {
  let component: TraineeNavbarComponent;
  let fixture: ComponentFixture<TraineeNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeNavbarComponent]
    });
    fixture = TestBed.createComponent(TraineeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
