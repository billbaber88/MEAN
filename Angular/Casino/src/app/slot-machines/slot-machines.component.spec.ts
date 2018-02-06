import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotMachinesComponent } from './slot-machines.component';

describe('SlotMachinesComponent', () => {
  let component: SlotMachinesComponent;
  let fixture: ComponentFixture<SlotMachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotMachinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
