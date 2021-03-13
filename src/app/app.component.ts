import { Component } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { DataService } from './services/data/data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pageList: { icon: string; name: string; pageUrl: string; }[];
  connectSubscription: any;

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    private dataService: DataService) {

    this.pageList = [
      { name: 'Change Password', pageUrl: 'changePswd', icon: 'git-compare' },
      { name: 'Rate our app', pageUrl: 'rate', icon: 'star-outline' },
      { name: 'Need Help ?', pageUrl: 'help', icon: 'help-circle-outline' },
    ]

  }

  async logout() {
    this.dataService.logout()
  }

  openPage(page) {
    console.log(page)
    this.menuCtrl.close();
  }

}
