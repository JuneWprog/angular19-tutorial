import { Component } from '@angular/core';
import {type TodoItem} from '../todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  imports: [],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {
newTodo: TodoItem = {
  id: 0,
  task: '',
  completed: false,
  description: ''
}

 
onSubmit(){
  // Emit the new todo item to the parent component
  // this.todoAdded.emit(this.newTodo);
  console.log(this.newTodo); // For debugging purposes
  // Reset the form after submission
  this.newTodo = {
    id: 0,
    task: '',
    completed: false,
    description: ''
  };
}


}
