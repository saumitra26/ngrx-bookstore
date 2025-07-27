import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookStoreState } from "./reducer";

export const selectBookStoreState= createFeatureSelector<BookStoreState>('Bookstore')
export const selectBooks= createSelector(
    selectBookStoreState,
    (state)=>state.books
)
export const selectBook= createSelector(
    selectBookStoreState,
    (state)=>state.book
)
export const selectBooksloading= createSelector(
    selectBookStoreState,
    (state)=>state.loadingBooks
)
export const selectBookloading= createSelector(
    selectBookStoreState,
    (state)=>state.loadingBook
)