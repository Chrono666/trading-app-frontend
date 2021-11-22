import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyStocksComponent } from './buy-stocks.component';

describe('BuyStocksComponent', () => {
  let component: BuyStocksComponent;
  let fixture: ComponentFixture<BuyStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
