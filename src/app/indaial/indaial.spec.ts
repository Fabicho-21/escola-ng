import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indaial } from './indaial';

describe('Indaial', () => {
  let component: Indaial;
  let fixture: ComponentFixture<Indaial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indaial],
    }).compileComponents();

    fixture = TestBed.createComponent(Indaial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
