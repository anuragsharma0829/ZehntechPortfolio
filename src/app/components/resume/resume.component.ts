import { Component } from '@angular/core';

interface Order{
  TotalPrice(price:number,quntity:number):number
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  calculateTotal:Order={
    TotalPrice(price, quntity) {
      let totalPrice=12*12;
      return totalPrice;
    },

  }
  
}
