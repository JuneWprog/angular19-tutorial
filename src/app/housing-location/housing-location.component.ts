import { Component,Input  } from '@angular/core';
import {HousingLocation} from './housing-location.interface';

@Component({
  selector: 'housing-location',
  standalone: true,
  imports: [],
  template: `
    <div style="border: 1px solid black; padding: 10px; margin: 10px; shadow: 2px 2px 5px #888888;">
        {{ houselocation.name }}<br>
        {{ houselocation.city }}<br>
        {{ houselocation.state }}<br>
        {{ houselocation.availableUnits }}<br>
        {{ houselocation.wifi }}<br>
        {{ houselocation.laundry }}<br>
        <br>
    </div>
  `,
})

//passing data from parent to child component using @Input decorator
export class HouseLocationComponent {
    @Input() houselocation!:HousingLocation;  // The ! tells TypeScript it will be initialized later

}