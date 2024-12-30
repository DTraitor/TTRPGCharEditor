import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStandaloneComponent } from './skill-standalone.component';

describe('SkillStandaloneComponent', () => {
  let component: SkillStandaloneComponent;
  let fixture: ComponentFixture<SkillStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
