import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeStandaloneComponent } from './attribute-standalone.component';

describe('AttributeStandaloneComponent', () => {
  let component: AttributeStandaloneComponent;
  let fixture: ComponentFixture<AttributeStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
