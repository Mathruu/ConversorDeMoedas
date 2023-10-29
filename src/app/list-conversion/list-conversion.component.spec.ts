import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConversionComponent } from './list-conversion.component';

describe('ListConversionComponent', () => {
  let component: ListConversionComponent;
  let fixture: ComponentFixture<ListConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListConversionComponent]
    });
    fixture = TestBed.createComponent(ListConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
