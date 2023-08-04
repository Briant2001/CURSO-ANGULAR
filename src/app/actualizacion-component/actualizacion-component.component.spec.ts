import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionComponentComponent } from './actualizacion-component.component';

describe('ActualizacionComponentComponent', () => {
  let component: ActualizacionComponentComponent;
  let fixture: ComponentFixture<ActualizacionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionComponentComponent]
    });
    fixture = TestBed.createComponent(ActualizacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
