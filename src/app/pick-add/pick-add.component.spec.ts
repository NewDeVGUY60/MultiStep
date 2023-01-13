import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAddComponent } from './pick-add.component';

describe('PickAddComponent', () => {
  let component: PickAddComponent;
  let fixture: ComponentFixture<PickAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
