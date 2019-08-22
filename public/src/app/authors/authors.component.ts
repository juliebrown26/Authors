import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];

  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors(){
    console.log('getting authors');
    let observable = this._authorService.getAuthors();
    observable.subscribe((data: Author[]) => {
      this.authors = data;
    })
  }
  removeAuthor(author: Author, index: number){
    let observable = this._authorService.removeAuthor(author);
    observable.subscribe((data: Author) => {
      console.log('removing author');
      this.authors.splice(index, 1);
    })
  }
}
