import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { Author } from './author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _authorService: AuthorService){ }
  ngOnInit() {
    this.getAuthors();
  }
  getAuthors(){
    this._authorService.getAuthors();
  }
}
