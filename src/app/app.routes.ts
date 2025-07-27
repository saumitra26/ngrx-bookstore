import { Routes } from '@angular/router';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

export const routes: Routes = [
    {
        path:'bookstore',
        component:BookStoreComponent
    },
    {
        path:'bookdetails/:id',
        component:BookDetailsComponent
    }
];
