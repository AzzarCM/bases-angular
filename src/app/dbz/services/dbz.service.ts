import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

  // forma 3 utilizar los servicios de angular
  
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 13000,
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes]
  }

  constructor(){
    console.log('service initialized');
  }
  agregarPersonaje(personaje: Personaje){
    this._personajes.push( personaje );
  }
}