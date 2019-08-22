import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newAuthor: Author;

  constructor(
    private _authorService: AuthorService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.newAuthor = {name: ''};
  }
  addAuthor(){
    console.log('adding new author');
    let observable = this._authorService.addAuthor(this.newAuthor);
    observable.subscribe((data: Author) => {
      this.newAuthor = {name: ''}
    })
    this._router.navigate(['/']);
  }
}
