import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  constructor(private router:Router){}
  Checkout(){
    this.router.navigate(['display']);
  }

}
