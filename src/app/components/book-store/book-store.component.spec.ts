import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreComponent } from './book-store.component';

describe('BookStoreComponent', () => {
  let component: BookStoreComponent;
  let fixture: ComponentFixture<BookStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//we should work on unit test
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
