import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCastingComponent } from './spell-casting.component';

describe('SpellCastingComponent', () => {
  let component: SpellCastingComponent;
  let fixture: ComponentFixture<SpellCastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellCastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellCastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
