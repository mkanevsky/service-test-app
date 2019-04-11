import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsxiComponent } from './esxi.component';

describe('EsxiComponent', () => {
  let component: EsxiComponent;
  let fixture: ComponentFixture<EsxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
