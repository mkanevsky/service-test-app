import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetForwarderComponent } from './asset-forwarder.component';

describe('AssetForwarderComponent', () => {
  let component: AssetForwarderComponent;
  let fixture: ComponentFixture<AssetForwarderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetForwarderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetForwarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
