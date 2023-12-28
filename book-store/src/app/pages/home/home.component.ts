import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Books } from 'src/app/core/constants/book';
import { book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  books: book[] = Books;
}
