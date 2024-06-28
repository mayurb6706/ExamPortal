import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategeoryComponent } from './create-categeory.component';

describe('CreateCategeoryComponent', () => {
  let component: CreateCategeoryComponent;
  let fixture: ComponentFixture<CreateCategeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategeoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
