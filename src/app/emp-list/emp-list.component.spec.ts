import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoListComponent } from './emp-list.component';

describe('EmoListComponent', () => {
  let component: EmoListComponent;
  let fixture: ComponentFixture<EmoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
