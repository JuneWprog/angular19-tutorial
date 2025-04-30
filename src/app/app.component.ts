import { Component } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import {HousingLocation} from './housing-location/housing-location.interface';
import { HouseLocationComponent } from './housing-location/housing-location.component';
import { TodoItem } from './todo';
import { TodoList } from './todoList';
import { CounterComponent } from './counter/counter.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, LoginComponent, SignupComponent, ProfileComponent, HouseLocationComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'angular-tutorial';
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  handleButtonClick =()=> {
    console.log('Button clicked!');
    this.otherFunction();
    // Call the other function here if needed
  }

  // call backfunction

  otherFunction=()=> {
    console.log('This is another function!');
  }

  name:string = 'John Doe';  //property
  data: number|string = 10; //property 
  isLoggedIn: boolean = false; //property

  info:any ="This is some information"; //property can be any type
  email ="jan@gmail.com"
i: any;

  setname(name:string) {
    let x = 10; //local variable
    this.name = name;
    // this.email = 20         //error, email was defined as string
    this.info =[]              //acceptable, info was defined as any
  }


  sum(a:number, b:number):number { //function with return type
    return a + b; //returning sum of a and b
    }
    pContent:string =""
    pContent2:string =""
    getInput(value:string):void { //function with no return type
      
      this.pContent = value; //local variable
    }


    onInput(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this.pContent2 = inputElement.value;
      console.log(this.pContent2); // Log the input value to the console
    }

    //counter component
    count =0
    increment() {
      if(this.count >= 10) {
        alert("Maximum limit reached")
        return
      }
      this.count++;
    }
    decrement() {
      if(this.count <= 0) {
        alert("Minimum limit reached")
        return
      }
      this.count--;
    }
    counter(operation:string){
      operation ==="add"?  this.count++ : this.count--
    }
    // property binding
    isDisabled= false

    //If-else condition
    show = true
    toggleShow() {
      this.show = !this.show; // Toggle the value of show
    }

    role:string = 'admin';

    friends:string[] =["Alice", "Bob", "Charlie"] //array of strings
    items :string[] =["Item 1", "Item 2", "Item 3"] //array of strings
    userDetails = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 35 }
    ]; //array of objects
    userInfo = [
      { id: 1, name: 'Alice', age: 25, emails:['alice@g.com', 'alice@t.com ']},
      { id: 2, name: 'Bob', age: 30,emails:['bob@g.com', 'bob@t.com ']},
      { id: 3, name: 'Charlie', age: 35, emails:['charlie@g.com', 'charlie@t.com '] }
    ]; //array of objects
    
    houseingLocations: HousingLocation[] = [
      {id: 1, name: 'Location 1', city: 'City 1', state: 'State 1', photo: 'photo1.jpg', availableUnits: 5, wifi: true, laundry: false},
      {id: 2, name: 'Location 2', city: 'City 2', state: 'State 2', photo: 'photo2.jpg', availableUnits: 10, wifi: false, laundry: true},
      {id: 3, name: 'Location 3', city: 'City 3', state: 'State 3', photo: 'photo3.jpg', availableUnits: 0, wifi: true, laundry: true},
      {id: 4, name: 'Location 4', city: 'City 4', state: 'State 4', photo: 'photo4.jpg', availableUnits: 2, wifi: false, laundry: false},
    ]

    //todo list
    private list = new TodoList("John Doe", [
      new TodoItem("Buy groceries"),
      new TodoItem("Clean the house"),
      new TodoItem("Finish homework"),
    ]);

    get username(): string {
      return this.list.user;
    }

    get itemCount(): number {
      return this.list.items.length;
    }
}
