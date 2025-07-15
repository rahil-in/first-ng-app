import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoServices } from '../services/todo-services';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
todoService = inject(TodoServices);
todoItems = signal<Todo[]>([])

ngOnInit(): void {
    this.todoService.getTodos().pipe(
      catchError((err) => { 
        console.error('Error fetching todos:', err);
        throw err; 
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos);
    });
}

}
