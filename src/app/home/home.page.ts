import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../services/data/auth.service';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  slideOptsMilk = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };
  milkSlide: any[];

  constructor(public alertController: AlertController,
    public navCtrl: NavController,
    private data: DataService,
    private authService: AuthService) {

    this.milkSlide = [
      { img: '/assets/imgs/milk2.png', name: 'Aavin', title: 'Pasteurised Toned Milk', ml: '50 ml Pouch', rupee: '21.5', offerFlag: '1' },
      { img: '/assets/imgs/milk1.png', name: 'Aavin', title: 'Pasteurised Toned Milk', ml: '50 ml Pouch', rupee: '21.5', offerFlag: '0' },
      { img: '/assets/imgs/milk2.png', name: 'Aavin', title: 'Pasteurised Toned Milk', ml: '50 ml Pouch', rupee: '21.5', offerFlag: '1' },
      { img: '/assets/imgs/milk1.png', name: 'Aavin', title: 'Pasteurised Toned Milk', ml: '50 ml Pouch', rupee: '21.5', offerFlag: '0' },
      { img: '/assets/imgs/milk2.png', name: 'Aavin', title: 'Pasteurised Toned Milk', ml: '50 ml Pouch', rupee: '21.5', offerFlag: '1' }
    ];

  }

  ngOnInit() {
  }

  async getLoadData() {
    await this.data.presentLoading();
    this.authService.getMethod().subscribe(
      async res => {
        console.log(res);
        await this.data.dismissLoader();

      }, (err) => {
        console.log(err);
        this.data.dismissLoader();
      });
  }

  gotoCart() {
    this.navCtrl.navigateRoot('cart');
  }

}
