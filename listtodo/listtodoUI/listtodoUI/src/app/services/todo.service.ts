import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'https://localhost:7064';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl+'/api/Todos/GetTasks');
  }

  addTasks(todo:Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseUrl+'/api/Todos/AddTasks', todo);
  }

  editTasks(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseUrl+'/api/Todos/EditTasks', todo);
  }

  deleteTasks(id:number): Observable<Todo> {
    return this.http.delete<Todo>(this.baseUrl+'/api/Todos/DeleteTasks?id='+id);
  }
  
}
