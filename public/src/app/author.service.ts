import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _author: HttpClient) {

   }
  getAuthors(){
    return this._author.get('/api/authors');
  }
  addAuthor(newAuthor){
    return this._author.post('/api/authors', newAuthor);
  }
  findAuthor(_id: string){
    return this._author.get(`/api/authors/${_id}`);
  }
  updateAuthor(author: Author){
    return this._author.put(`/api/authors/${author._id}`, author);
  }
  removeAuthor(author: Author){
    return this._author.delete(`/api/authors/${author._id}`);
  }
}
