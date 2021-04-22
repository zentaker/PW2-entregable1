import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizza:any[] = [
    {
        "nombre": "Bismarck",
        "precio": "s/45",
        "descripcion": "Pizza para los niños pequeños que les guste las verduras",
        "categoria1": "Queso",
        "categoria2": "Para Niños",
        "categoria3": "Light",
        "img": "assets/pizza1.jpg"
    },
    {
      "nombre": "Fiori Di Zucca",
      "precio": "s/45",
      "descripcion": "Para los amantes de los quesos y picante",
      "categoria1": "Queso",
      "categoria2": "Para Niños",
      "categoria3": "picante",
      "img": "assets/pizza2.jpg"
    },
    {
      "nombre": "Valdostana",
      "precio": "s/45",
      "descripcion": "Una pizza perfecta para los amantes de los sabores intensos",
      "categoria1": "Queso",
      "categoria2": "Para Niños",
      "categoria3": "Light",
      "img": "assets/pizza3.jpg"
    },
    {
      "nombre": "Pizza Tartufata",
      "precio": "s/50",
      "descripcion": "Extra queso con aceite de trufas, un sabor mediterraneo",
      "categoria1": "Queso",
      "categoria2": "Para Niños",
      "categoria3": "dulce",
      "img": "assets/pizza4.jpg"
    },
    {
      "nombre": "Francescana",
      "precio": "s/35",
      "descripcion": "Una pizza tradicional francesa para los amantes de la cultura francesa ",
      "categoria1": "Queso",
      "categoria2": "Para Niños",
      "categoria3": "light",
      "img": "assets/pizza5.jpg"
    },
    {
      "nombre": "Campagnola",
      "precio": "s/45",
      "descripcion": "Muchas verduras para los amantes de las ensaladas en una pizza ",
      "categoria1": "Queso",
      "categoria2": "Para Niños",
      "categoria3": "dulce",
      "img": "assets/pizza6.jpg"
    },
    {
      "nombre": "Boscaiola",
      "precio": "s/75",
      "descripcion": "Muchas verduras para los amantes de las ensaladas en una pizza ",
      "categoria1": "Queso",
      "categoria2": "Picante",
      "categoria3": "dulce",
      "img": "assets/pizza7.jpg"
  },
    {
      "nombre": "Mare e Monti",
      "precio": "s/45",
      "descripcion": "Pizza marina con langostinos ",
      "categoria1": "Queso",
      "categoria2": "light",
      "categoria3": "Marino",
      "img": "assets/pizza6.jpg"
    },
    {
      "nombre": "Parmigiana",
      "precio": "s/45",
      "descripcion": "Pizza marina con langostinos ",
      "categoria1": "Queso",
      "categoria2": "light",
      "categoria3": "Marino",
      "img": "assets/pizza8.jpg"
    },
    {
      "nombre": "Ricotta e spinac",
      "precio": "s/45",
      "descripcion": "Pizza marina con langostinos ",
      "categoria1": "Queso",
      "categoria2": "light",
      "categoria3": "Marino",
      "img": "assets/pizza9.jpg"
    },
    {
      "nombre": "Pizza al pesto",
      "precio": "s/45",
      "descripcion": "Pizza marina con langostinos ",
      "categoria1": "Queso",
      "categoria2": "light",
      "categoria3": "Marino",
      "img": "assets/pizza10.jpg"
    },


    
]


  constructor() { }

  getPizzas() {
    return this.pizza;

  }
}
