import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from './model/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:3000/books';
  getBooks():Observable<BookModel[]>{
    return (this.http.get<BookModel[]>(this.apiUrl))
  }
  saveBook(book: BookModel):  Observable<BookModel>{
    console.log('book',book);
  return this.http.post<BookModel>(this.apiUrl, book);
  } 
  deleteBook(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getBook(id:string):Observable<BookModel>{
    return this.http.get<BookModel>(`${this.apiUrl}/${id}`)
  }
  updateBook(book:BookModel):Observable<BookModel>{
   return this.http.put<BookModel>(`${this.apiUrl}/${book.id}`, book);
  }
}
