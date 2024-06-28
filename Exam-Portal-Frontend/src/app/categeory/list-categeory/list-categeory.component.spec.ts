import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategeoryComponent } from './list-categeory.component';

describe('ListCategeoryComponent', () => {
  let component: ListCategeoryComponent;
  let fixture: ComponentFixture<ListCategeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategeoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
