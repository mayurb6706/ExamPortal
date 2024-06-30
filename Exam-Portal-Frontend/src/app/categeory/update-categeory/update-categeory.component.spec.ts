import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategeoryComponent } from './update-categeory.component';

describe('UpdateCategeoryComponent', () => {
  let component: UpdateCategeoryComponent;
  let fixture: ComponentFixture<UpdateCategeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCategeoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCategeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
