import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditDepComponent } from './adit-dep.component';

describe('AditDepComponent', () => {
  let component: AditDepComponent;
  let fixture: ComponentFixture<AditDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
