import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpendComponent } from './create-spend.component';

describe('CreateSpendComponent', () => {
  let component: CreateSpendComponent;
  let fixture: ComponentFixture<CreateSpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
