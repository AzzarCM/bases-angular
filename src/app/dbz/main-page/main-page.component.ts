import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  //personajes: Personaje[] = []  forma 1 de obtener la informacion del servicio y pasarsela a nuestro html

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes --> forma 2 de obtener la informacion del servicio
  // }



  constructor( private dbzService: DbzService ){}  //this.personajes = this.dbzService.personajes  --> forma 1 de obtener la informacion del servicio
  
}
