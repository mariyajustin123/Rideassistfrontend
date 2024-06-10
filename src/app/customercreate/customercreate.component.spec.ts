import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercreateComponent } from './customercreate.component';

describe('CustomercreateComponent', () => {
  let component: CustomercreateComponent;
  let fixture: ComponentFixture<CustomercreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomercreateComponent]
    });
    fixture = TestBed.createComponent(CustomercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
