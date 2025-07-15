import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoServices {
  todoItems: Todo[] = [
    {
      userId: 1,
      title: 'Learn Angular',
      completed: false,
      id: 1
    },
    {
      userId: 1,
      title: 'Develop an Angular App',
      completed: false,
      id: 2
    },
    {
      userId: 1,
      title: 'Test the Angular App',
      completed: false,
      id: 3
    }

  ]
  constructor() { }
}
