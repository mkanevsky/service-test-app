import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotedesktopComponent } from './remotedesktop.component';

describe('RemotedesktopComponent', () => {
  let component: RemotedesktopComponent;
  let fixture: ComponentFixture<RemotedesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemotedesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotedesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
