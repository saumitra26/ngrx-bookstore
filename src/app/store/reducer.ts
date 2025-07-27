import { createReducer, on } from "@ngrx/store";
import { BookModel } from "../share/model/bookmodel";
import { createBook, createBookFailure, createBookSuccess, deleteBook, deleteBookFailure, deleteBookSuccess, loadBook, loadBookFailure, loadBooks, loadBooksFailure, loadBooksSuccess, loadBookSuccess, updateBook, updateBookFailure, updateBookSuccess } from "./action";

export interface BookStoreState{
    books:BookModel[]
    book:BookModel | null
    loadingBooks: boolean;      // for list of books
    loadingBook: boolean;   
    error?:any
}
export const initialState:BookStoreState ={
    books:[],
    book:null,
    loadingBooks:false,
    loadingBook: false  
}
export const bookstoreReducer =createReducer(
    initialState,
    on(loadBooks, (state)=>({
            ...state,
            loadingBooks:true
        })  
    ),
    on(loadBooksSuccess, (state,{books})=>({
            ...state,
            books:books,
            loadingBooks:false
    })),
    on(loadBooksFailure, (state,{error})=>({
        ...state,
        error:error,
        loadingBooks:false
        })
    ),
    on(loadBook, (state,{id})=>({
         ...state,
         loadingBook:true

    })),
    on(loadBookSuccess, (state,{book})=>({
         ...state,
         book:book,
         loadingBook:false
    })),
     on(loadBookFailure, (state,{error})=>({
         ...state,
         error:error,
         loadingBook:false
    })),
     on(createBook, (state)=>({
         ...state,
         loadingBook:true,
    })),
    on(createBookSuccess, (state,{book})=>({
         ...state,
          books: [...state.books, book],
         book:book,
         loadingBook: false
    })),
     on(createBookFailure, (state,{error})=>({
         ...state,
         error:error,
         loadingBook: false
    })),

     on(updateBook, (state) => ({
    ...state,
    loadingBook: true,
    })),
    on(updateBookSuccess, (state, { book }) => ({
    ...state,
    books: state.books.map(b => b.id === book.id ? book : b),
    book: book,
    loadingBook: false,
    })),
    on(updateBookFailure, (state, { error }) => ({
    ...state,
    error: error,
    loadingBook: false,
    })),
    
     on(deleteBook, (state)=>({
         ...state,
         loadingBook:true
    })),
    on(deleteBookSuccess, (state,{id})=>({
         ...state,
        books:state.books.filter((book)=>book.id !=id),
        loadingBook: false
    })),
     on(deleteBookFailure, (state,{error})=>({
         ...state,
         error:error,
         loadingBook:false
         
    })),


)