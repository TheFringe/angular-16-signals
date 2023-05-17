import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDataComponent } from './old-data.component';

describe('OldDataComponent', () => {
  let component: OldDataComponent;
  let fixture: ComponentFixture<OldDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OldDataComponent]
    });
    fixture = TestBed.createComponent(OldDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
