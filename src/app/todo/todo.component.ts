import { Component } from '@angular/core';
import { type TodoItem } from '../todo';
import {TodoItemComponent} from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  imports: [TodoItemComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos : TodoItem[] =[]

  addTodo(todo: TodoItem) {
    this.todos.push(todo);
  }

  deleteTodo(todoId: number) {
    
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

}
