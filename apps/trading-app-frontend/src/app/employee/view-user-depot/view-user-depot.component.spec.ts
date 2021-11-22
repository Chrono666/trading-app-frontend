import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserDepotComponent } from './view-user-depot.component';

describe('ViewUserDepotComponent', () => {
  let component: ViewUserDepotComponent;
  let fixture: ComponentFixture<ViewUserDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserDepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
