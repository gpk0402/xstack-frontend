import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfileUpdateComponent } from './trainer-profile-update.component';

describe('TrainerProfileUpdateComponent', () => {
  let component: TrainerProfileUpdateComponent;
  let fixture: ComponentFixture<TrainerProfileUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerProfileUpdateComponent]
    });
    fixture = TestBed.createComponent(TrainerProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
