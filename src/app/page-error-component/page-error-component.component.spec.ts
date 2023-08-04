import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrorComponentComponent } from './page-error-component.component';

describe('PageErrorComponentComponent', () => {
  let component: PageErrorComponentComponent;
  let fixture: ComponentFixture<PageErrorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageErrorComponentComponent]
    });
    fixture = TestBed.createComponent(PageErrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
