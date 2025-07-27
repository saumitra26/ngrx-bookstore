import { createAction, props } from "@ngrx/store";
import { BookModel } from "../share/model/bookmodel";

export const loadBooks = createAction('[Bookstore] Load Books');
export const loadBooksSuccess = createAction('[Bookstore] Load Books Success', props<{ books: BookModel[] }>());
export const loadBooksFailure = createAction('[Bookstore] Load Books Failure', props<{ error: any }>());

export const loadBook = createAction('[Bookstore] Load Book', props<{ id: string }>());
export const loadBookSuccess = createAction('[Bookstore] Load Book Success', props<{ book: BookModel }>());
export const loadBookFailure = createAction('[Bookstore] Load Book Failure', props<{ error: any }>());

export const createBook = createAction('[Bookstore] Create Book', props<{ book: BookModel }>());
export const createBookSuccess = createAction('[Bookstore] Create Book Success', props<{ book: BookModel }>());
export const createBookFailure = createAction('[Bookstore] Create Book Failure', props<{ error: any }>());

export const updateBook = createAction('[Bookstore] Update Book', props<{ book: BookModel }>());
export const updateBookSuccess = createAction('[Bookstore] Update Book Success', props<{ book: BookModel }>());
export const updateBookFailure = createAction('[Bookstore] Update Book Failure', props<{ error: any }>());

export const deleteBook = createAction('[Bookstore] Delete Book', props<{ id: string }>());
export const deleteBookSuccess = createAction('[Bookstore] Delete Book Success', props<{ id: string }>());
export const deleteBookFailure = createAction('[Bookstore] Delete Book Failure', props<{ error: any }>());
