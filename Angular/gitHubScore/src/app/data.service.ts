import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
  constructor(private _http: Http) { }

  retrieveUser(username: string): Observable<User> {
    // when concatanating, use back ticks `` not quotes ''
    return this._http.get(`https://api.github.com/users/${ username }`).map(response => response.json());
  }

}
