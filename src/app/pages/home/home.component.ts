import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pizzas: any[] = [];

  constructor(private _pizzaService: PizzaService,
              private router: Router) { }
  
  // cuando la pagina ya esta cragada
  ngOnInit(): void {
    this.pizzas = this._pizzaService.getPizzas();
  }

}
