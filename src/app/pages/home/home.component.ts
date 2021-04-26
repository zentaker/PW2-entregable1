import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/servicios/pizza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pizzas: any[] = [];
  filtro: any[] = [];
  categoria: any[] = [];
  cargando = false;
  

  constructor(private _pizzaService: PizzaService,
    private router: Router) {
    
    
      
     
               }
  
  // cuando la pagina ya esta cragada
  ngOnInit(): void {
    this.pizzas = this._pizzaService.getPizzas();
    this.filtro = this.pizzas;

    //barrer categorias
  
    
  
    
  }

  //filtro por categorias
  catGo(termino:string) {
    let pizzaArr: any[] = [];
    termino = termino;
    console.log(termino)

    //this.filtro = []
    

    this.cargando = true;

    setTimeout(() => {
      
      
      for (let i = 0; i < this.pizzas.length; i++){

        let pizza = this.pizzas[i];
        let categorias = pizza.categorias;
        
        for (let i = 0; i < categorias.length; i++) {
          //console.log(categorias)
          if ( categorias.indexOf(termino) >= 0) {
            pizza.idx = i;
  
            if (pizza.idx == 0) {
              pizzaArr.push(pizza);
              this.filtro = pizzaArr;
            } 
          }   
        }
        
      }

      this.cargando = false;
      
 }, 1000);

    
    console.log(pizzaArr)


    
  }
  
 
    /* buscarClinicas (termino:string) {
    let clinicaArr:any[] = [];
    termino = termino.toLowerCase();

    for(let i = 0; i< this.clinicas.length; i ++){
        let clinica = this.clinicas[i];
        let nombre = clinica.clinica.toLowerCase();
        let dir = clinica.Direccion.toLowerCase();
       
        
        if (nombre.indexOf(termino) >= 0) {
            clinica.idx = i;
            clinicaArr.push(clinica)
        } else if (dir.indexOf(termino) >= 0){
            clinica.idx = i;
            clinicaArr.push(clinica)

        }

    }


    return clinicaArr;




} */


}
