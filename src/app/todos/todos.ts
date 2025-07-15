import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoServices } from '../services/todo-services';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
todoService = inject(TodoServices);
todoItems = signal<Todo[]>([])
ngOnInit(): void {
    this.todoItems.set(this.todoService.todoItems);
}

}
