import { Component, OnInit } from '@angular/core';
import { getAll, getSingleProd } from 'src/app/data/Prod';
import { Product } from 'src/app/model/product';
import { ProdService } from 'src/app/services/prod.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    // constructor() { }

    // ar:Product[] = getAll();
    // singleProd:Product = getSingleProd(3);

    constructor(private prodSrv: ProdService) { }

    ar: Product[] = this.prodSrv.getAll()
    singleProd: Product = this.prodSrv.getSingleProd(2)

    ngOnInit(): void { }
}
