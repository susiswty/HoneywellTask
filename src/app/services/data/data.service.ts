import { Injectable } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public alertController: AlertController,
    public navCtrl: NavController) {

  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'bubbles',
    });
    await loading.present();
  }

  async dismissLoader() {
    this.loadingCtrl.dismiss();
  }


  async logout() {
    const alert = await this.alertController.create({
      header: 'Sign Out',
      message: 'Are you sure you want to sign out from the application?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.navCtrl.navigateRoot('login')
          }
        }
      ]
    });
    await alert.present();
  }


}

