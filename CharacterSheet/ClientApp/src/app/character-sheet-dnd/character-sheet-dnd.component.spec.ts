import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetDndComponent } from './character-sheet-dnd.component';

describe('CharacterSheetDndComponent', () => {
  let component: CharacterSheetDndComponent;
  let fixture: ComponentFixture<CharacterSheetDndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetDndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterSheetDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
