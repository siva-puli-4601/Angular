import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {

  private API = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  // GET tasks → returns Observable
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API).pipe(
      catchError(err => {
        console.error('Service Error:', err);
        return throwError(() => 'Failed to load tasks');
      })
    );
  }
}