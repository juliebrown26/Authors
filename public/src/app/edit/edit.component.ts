import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  author: Author;

  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params: Params) => {
      console.log(params);
      const id = params.params["id"];
      console.log(id);
        this._authorService.findAuthor(id).subscribe((author: Author) => {
          this.author = author;   
        })
    })
  }
  editAuthor(author: Author){
    let observable = this._authorService.updateAuthor(author);
    observable.subscribe((data: Author) => {
      console.log('updating author');
    })
    this._router.navigate(['/']);
  }
}
