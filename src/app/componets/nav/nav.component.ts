import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  private sub$!: Subscription;
  counter = 0;

  constructor(
    private storeService : StoreService
  ){ }

  ngOnInit(): void{
    this.storeService.myCart$
    .subscribe(products => {
      //Cada vez que el observable emita un valos, se ejecuta este codigo
      this.counter = products.length;
    })
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
