import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookserviceService } from '../../share/bookservice.service';
import { BookModel } from '../../share/model/bookmodel';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBook } from '../../store/selector';
import { loadBook } from '../../store/action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  imports: [MatListModule,CommonModule, MatCardModule,MatDividerModule,AsyncPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  private store= inject(Store)
  constructor(private route: ActivatedRoute, private bookService:BookserviceService) {}
  bookId: string | null = null;
 //bookDetails: BookModel | null = null;
 bookDetails$:Observable< BookModel | null> = this.store.select(selectBook);

  

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    console.log('Selected Book ID:', this.bookId);
    if (this.bookId) {
  //     this.bookService.getBook(this.bookId).subscribe({
  //    next: (book) => {
  //     this.bookDetails = book;
  //   }
  // });
  this.store.dispatch(loadBook({id:this.bookId}))
  }
  }
}