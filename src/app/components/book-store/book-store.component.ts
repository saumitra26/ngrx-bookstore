import { Component, inject, OnInit } from '@angular/core';
import { BookserviceService } from '../../share/bookservice.service';
import { BookModel } from '../../share/model/bookmodel';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBooks } from '../../store/selector';
import { createBook, deleteBook, loadBooks, updateBook } from '../../store/action';

@Component({
  selector: 'app-book-store',
  imports: [CommonModule, MatButtonModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,AsyncPipe],
  templateUrl: './book-store.component.html',
  styleUrl: './book-store.component.css'
})
export class BookStoreComponent implements  OnInit {
  private store= inject(Store)
 // listofBooks:BookModel[]=[]
 listofBooks$:Observable<BookModel[]>=this.store.select(selectBooks)
  saveBookForm!:FormGroup;
  isEditMode:boolean=false;
  constructor(private bookService:BookserviceService,
    private fb:FormBuilder,
    private router: Router
  ){}
  ngOnInit(): void {
    this.getBooks();
    this.formInitialization();
  }
  private formInitialization(){
    this.saveBookForm=this.fb.group({
       id: ['', Validators.required],
       title:['',Validators.required],
       author:['',Validators.required],
       description:['',Validators.required]
    })
  }
  getBooks(){
    // this.bookService.getBooks().subscribe(books=>{
    //   this.listofBooks = [...this.listofBooks, ...books];
    //   console.log('answer',this.listofBooks)
    // })
    this.store.dispatch(loadBooks())
  }
  editBook(book:BookModel){
    this.isEditMode = true;
   this.saveBookForm.patchValue({
    id: book.id,
    title: book.title,
    author: book.author,
    description: book.description
  });
  }
  saveChanges(){
    // this.bookService.updateBook(this.saveBookForm.value).subscribe({
    //   next: (response)=>{
    //     console.log('Book saved:', response);
    //     //this.getBooks();
    //    // formDirective.resetForm();
    //     this.saveBookForm.reset();
    //   },
    //   error:(error)=>{
    //     console.error('Error saving book:', error);
    //   }
    //  })
    this.store.dispatch(updateBook({book:this.saveBookForm.value}))
  }
  cancelEdit() {
  this.isEditMode = false;
  this.saveBookForm.reset();
  }
  deleteBook(bookid:string){
    //  this.bookService.deleteBook(bookid).subscribe({
    // next: () => {
    //   console.log('Book deleted successfully');
    //  // this.getBooks(); // refresh the list
    // },
    // error: (err) => {
    //   console.error('Failed to delete book:', err);
    // }
    // });
     this.store.dispatch(deleteBook({id:bookid}))
  }
  bookAdd(formDirective:FormGroupDirective){
    //  this.bookService.saveBook(this.saveBookForm.value).subscribe({
    //   next: (response)=>{
    //     console.log('Book saved:', response);
    //     this.getBooks();
    //     formDirective.resetForm();
    //     this.saveBookForm.reset();
    //   },
    //   error:(error)=>{
    //     console.error('Error saving book:', error);
    //   }
    //  })
    this.store.dispatch(createBook({book:this.saveBookForm.value}))
 
  }
  selectBook(id:string){
    this.router.navigate(['/bookdetails',id])
  }
getGitPractice(){
  console.log('This is from merge-test2');
  let a=4;
  }
}
