import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

    ar: Product[]=[
        {prod: "milk", price: 5},
        {prod: "sugar", price: 3},
        {prod: "bread", price: 7},
        {prod: "tuna", price: 6},
        {prod: "salt", price: 2},
        {prod: "water", price: 4}
    ];
    
    getSingleProd=(id:number)=>{
        return this.ar[id]
    }
    
    getAll=()=>{
        return this.ar
    }

  constructor() { }
}
