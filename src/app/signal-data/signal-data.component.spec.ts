import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDataComponent } from './signal-data.component';

describe('SignalDataComponent', () => {
  let component: SignalDataComponent;
  let fixture: ComponentFixture<SignalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalDataComponent]
    });
    fixture = TestBed.createComponent(SignalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
