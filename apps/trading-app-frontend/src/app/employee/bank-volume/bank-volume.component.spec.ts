import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankVolumeComponent } from './bank-volume.component';

describe('BankVolumeComponent', () => {
  let component: BankVolumeComponent;
  let fixture: ComponentFixture<BankVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
