import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/data/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { ToastAlertService } from 'src/app/services/data/toast-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public navCtrl: NavController,
     private toast: ToastAlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async submit(value) {
    console.log(value);
    this.navCtrl.navigateRoot('home');
    this.toast.presentToast('You have successfully singed in');
  }

}
