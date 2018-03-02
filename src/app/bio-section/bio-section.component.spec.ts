import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioSectionComponent } from './bio-section.component';

describe('BioSectionComponent', () => {
  let component: BioSectionComponent;
  let fixture: ComponentFixture<BioSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
