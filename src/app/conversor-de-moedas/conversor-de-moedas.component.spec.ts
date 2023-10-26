import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDeMoedasComponent } from './conversor-de-moedas.component';

describe('ConversorDeMoedasComponent', () => {
  let component: ConversorDeMoedasComponent;
  let fixture: ComponentFixture<ConversorDeMoedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversorDeMoedasComponent]
    });
    fixture = TestBed.createComponent(ConversorDeMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
