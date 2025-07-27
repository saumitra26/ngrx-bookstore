import { inject, Injectable } from "@angular/core";
import { BookserviceService } from "../share/bookservice.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createBook, createBookFailure, createBookSuccess, deleteBook, deleteBookFailure, deleteBookSuccess, loadBook, loadBookFailure, loadBooks, loadBooksFailure, loadBooksSuccess, loadBookSuccess, updateBook, updateBookFailure, updateBookSuccess } from "./action";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { BookModel } from "../share/model/bookmodel";

@Injectable()
export class BookStoreEffects{
  private actions$=inject(Actions)
  constructor(private bookService:BookserviceService ){}
  loadallBooks$=createEffect(()=>
    this.actions$.pipe(
        ofType(loadBooks),
        mergeMap(()=>
            this.bookService.getBooks().pipe(
                map((allbooks:BookModel[])=>
                    loadBooksSuccess({books:allbooks})
                ),
                catchError((error)=>
                    of(loadBooksFailure({error:error}))
                )
            )
        )
    )
  )
  loadSingleBook$=createEffect(()=>
    this.actions$.pipe(
        ofType(loadBook),
        switchMap((({ id })=>
            this.bookService.getBook(id).pipe(
                map((book:BookModel)=>
                    loadBookSuccess({book:book})
                ),
                 catchError((error) => of(loadBookFailure({ error })))
            )
        )
        )   
    )
    )
    saveNewBook$=createEffect(()=>
        this.actions$.pipe(
            ofType(createBook),
            mergeMap(({book})=>
                this.bookService.saveBook(book).pipe(
                    map((savebook:BookModel)=>
                        createBookSuccess({book:savebook})
                    ),
                    catchError((error) => of(createBookFailure({ error })))
                    
                )
            )
        )
    )
    updateBook$=createEffect(()=>
        this.actions$.pipe(
            ofType(updateBook),
            mergeMap(({book})=>
                this.bookService.updateBook(book).pipe(
                    map((updatedBook)=>
                        updateBookSuccess({book:updatedBook})
                    ),
                     catchError((error) => of(updateBookFailure({ error })))
                )
            )
        )

    )
    deleteBook$=createEffect(()=>
        this.actions$.pipe(
            ofType(deleteBook),
            mergeMap(({id})=>
                this.bookService.deleteBook(id).pipe(
                    map(()=>
                        deleteBookSuccess({id})
                    ),
                     catchError((error) => of(deleteBookFailure({ error })))
                )
            )
        )

    )

}