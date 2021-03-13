import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  itemList: number;
  amount: number;

  constructor(public navCtrl: NavController) {

    this.itemList = 1;
    this.amount = 21.5;

  }

  ngOnInit() {
  }

  remove() {

    this.itemList -= 1;

    if (this.itemList == 0) {
      this.navCtrl.navigateRoot('home');
    }

  }

  add() {
    this.itemList += 1;
  }

}
