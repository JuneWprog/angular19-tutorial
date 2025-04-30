import { Component, input } from '@angular/core';
import {type TodoItem} from '../todo.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  todo= input.required<TodoItem>() 


}
