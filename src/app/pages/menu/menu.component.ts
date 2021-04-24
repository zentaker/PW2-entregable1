import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pizzas: any[] = [];

  constructor(private _pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzas = this._pizzaService.getPizzas();
  }

}
