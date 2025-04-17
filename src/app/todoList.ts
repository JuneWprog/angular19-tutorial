import { TodoItem } from "./todo";


export class TodoList{
    constructor(public user: string, private todoItems: TodoItem[] = []){}

    //getter
    get items(): readonly TodoItem[] {
        return this.todoItems;
    }

    //setter
    addItem(task:string){
        this.todoItems.push(new TodoItem(task));
    }
}