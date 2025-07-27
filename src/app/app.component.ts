import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookStoreComponent } from "./components/book-store/book-store.component";
import { HeaderComponent } from "./share/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookStore';
}
