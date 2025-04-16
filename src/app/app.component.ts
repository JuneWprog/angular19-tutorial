import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
}
