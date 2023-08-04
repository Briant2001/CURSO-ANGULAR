import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTableComponent } from './td-table.component';

describe('TdTableComponent', () => {
  let component: TdTableComponent;
  let fixture: ComponentFixture<TdTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdTableComponent]
    });
    fixture = TestBed.createComponent(TdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
