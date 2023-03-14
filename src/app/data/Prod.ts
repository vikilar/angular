import { Product } from "../model/product";

const ar: Product[]=[
    {prod: "milk", price: 5},
    {prod: "sugar", price: 3},
    {prod: "bread", price: 7},
    {prod: "tuna", price: 6},
    {prod: "salt", price: 2},
    {prod: "water", price: 4}
];

export const getSingleProd=(id:number)=>{
    return ar[id]
}

export const getAll=()=>{
    return ar
}