import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
name:any="anurag"
todaydate = new Date(); 
jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};   
}
