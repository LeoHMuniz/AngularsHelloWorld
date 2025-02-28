import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindsComponent } from './two-way-binds.component';

describe('TwoWayBindsComponent', () => {
  let component: TwoWayBindsComponent;
  let fixture: ComponentFixture<TwoWayBindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
