import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteSalonComponent } from './visite-salon.component';

describe('VisiteSalonComponent', () => {
  let component: VisiteSalonComponent;
  let fixture: ComponentFixture<VisiteSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
