# AngularTutorial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Interpolation
{{}}

Limit of Interpolation: do not update variable     {{a++}}  {{a=152}}

components:
4 files      .html  .ts .css   .spec.ts (unit test)

```
ng generate component login
ng  g c signup

```
import component and use it 

import the component to .ts 
```ts

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, LoginComponent],       //import the login
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


in .html
<!-- login component selector  selector: 'app-login', -->
<app-login />
```

## Make Custom Component without ng command
ngsfc        for code snippet


```ts
import { Component } from '@angular/core';
//ngsfc code snippet
@Component({
  selector: 'profile',
  standalone: true,
  imports: [],
  template: `
    <div>
      profile works!
    </div>
  `,
})
export class ProfileComponent {}

```

## button, functions, call function onClick


define a function and button click event
```
 handleButtonClick =()=> {
    console.log('Button clicked!');
  }



 <button (click) ="handleButtonClick()"> click me</button>
```

## Data Type
name:string ="Jun"    
name = "Jun"       latter you can't change the type   name=15 
name: any ="Jun"      latter you can change the type  name =15

name:string|number = "Jun:   latter it can be any of these types


## Call function with events
events: click, change, mouseover, mouseenter, mouseout, keyup, keydown, blur, focus,input 

## get form value
.html
<input type="text" #box1  (click) ="getData(box1.value)"/>

.ts
getData(val:string){
    console.log(val)
}

```ts
<p>Count: {{ count }}</p>

<button (click)="increment()">Increment +</button>
<button (click)="decrement()">Decrement -</button>


<p>Count: {{ count }}</p>
<button (click)="counter('add')">Increment</button>
<button (click)="counter('minus')">Decrement</button>


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
```