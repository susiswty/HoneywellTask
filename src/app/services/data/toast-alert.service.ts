import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastAlertService {

  constructor(public toastController: ToastController,
    public alertController: AlertController) { }

  async presentToast(infoMessage: string) {
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 2000,
    });
    toast.present();
  }

  async alertMessage(text) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: text,
      cssClass: 'alertCss',
      buttons: ['OK']
    });
    await alert.present();
  }
}
