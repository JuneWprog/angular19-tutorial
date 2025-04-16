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

```ts
 handleButtonClick =()=> {
    console.log('Button clicked!');
  }



 <button (click) ="handleButtonClick()"> click me</button>
```

## Data Type
Types
TypeScript supports all the types used in JavaScript:

boolean
number
string
arrays
TypeScript also adds the following types:

enum
any
void
```ts
name:string ="Jun"    
name = "Jun"       latter you can't change the type   name=15 
name: any ="Jun"      latter you can change the type  name =15

name:string|number = "Jun:   latter it can be any of these types
```

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

## Property Binding

Interpolation lets you embed data directly into the HTML — it's mostly used for setting text content.
🎯 Use case:
When you want to display string or number values in the DOM — text content only.
<p>{{name}}</p>     


Property binding sets DOM element properties or component/directive inputs using square brackets.
🎯 Use case:
When you're setting anything other than inner text, especially attributes like:
src, href, disabled, class, value, style, etc.
<img [src]="imageUrl" />
<input [value]="username" />
<button [disabled]="isDisabled">Click Me</button>


## if else in html 
```html

<div *ngIf="isLoggedIn">Welcome back!</div>



<div *ngIf="isLoggedIn; else notLoggedIn">
  Welcome back!
</div>

<ng-template #notLoggedIn>
  <div>Please log in.</div>
</ng-template>


<ng-container *ngIf="isLoading; then loadingTemplate; else contentTemplate"></ng-container>

<ng-template #loadingTemplate>
  <p>Loading...</p>
</ng-template>

<ng-template #contentTemplate>
  <p>Data loaded!</p>
</ng-template>

```

✅ Angular 17+ @if / @else Syntax

```html
@if (status === 'loading') {
  <p>Loading...</p>
} @elseif (status === 'error') {
  <p>Oops! Something went wrong.</p>
} @else {
  <p>Content loaded.</p>
}


```


✅ Classic Angular *ngSwitch (All Versions)
🔧 How it works:
Use *ngSwitch on a container, and *ngSwitchCase or *ngSwitchDefault inside it
```
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">You have admin access</p>
  <p *ngSwitchCase="'user'">You are a regular user</p>
  <p *ngSwitchCase="'guest'">You are browsing as a guest</p>
  <p *ngSwitchDefault>Unknown role</p>
</div>

```

🌟 Angular 17+ @switch (New Syntax, Standalone Components Only)

```
@switch (role) {
  @case ('admin') {
    <p>You have admin access</p>
  }
  @case ('user') {
    <p>You are a regular user</p>
  }
  @case ('guest') {
    <p>You are browsing as a guest</p>
  }
  @default {
    <p>Unknown role</p>
  }
}




```

