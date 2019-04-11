import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmiComponent } from './ipmi.component';

describe('IpmiComponent', () => {
  let component: IpmiComponent;
  let fixture: ComponentFixture<IpmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
