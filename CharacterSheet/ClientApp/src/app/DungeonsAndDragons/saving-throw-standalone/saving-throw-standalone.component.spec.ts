import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingThrowStandaloneComponent } from './saving-throw-standalone.component';

describe('SavingThrowStandaloneComponent', () => {
  let component: SavingThrowStandaloneComponent;
  let fixture: ComponentFixture<SavingThrowStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingThrowStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingThrowStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
