import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSecondaryDefaultTextComponent } from './btn-secondary-default-text.component';

describe('BtnSecondaryDefaultTextComponent', () => {
  let component: BtnSecondaryDefaultTextComponent;
  let fixture: ComponentFixture<BtnSecondaryDefaultTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSecondaryDefaultTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSecondaryDefaultTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
