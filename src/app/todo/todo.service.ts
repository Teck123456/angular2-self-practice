import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UUID} from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

import {Todo} from './todo.model';

@Injectable()
export class TodoService {

  // 定义你的假WebAPI地址，这个定义成什么都无所谓
  // 只要确保是无法访问的地址就好
  private api_url = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  // POST /todos
  addTodo(desc: string): Promise<Todo> {
    const todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    return this.http
      .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
