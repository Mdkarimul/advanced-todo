import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDefaultOnlyTextComponent } from './primary-default-only-text.component';

describe('PrimaryDefaultOnlyTextComponent', () => {
  let component: PrimaryDefaultOnlyTextComponent;
  let fixture: ComponentFixture<PrimaryDefaultOnlyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryDefaultOnlyTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryDefaultOnlyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
