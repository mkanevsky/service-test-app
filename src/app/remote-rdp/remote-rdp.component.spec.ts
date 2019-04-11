import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteRDPComponent } from './remote-rdp.component';

describe('RemoteRDPComponent', () => {
  let component: RemoteRDPComponent;
  let fixture: ComponentFixture<RemoteRDPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteRDPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteRDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
