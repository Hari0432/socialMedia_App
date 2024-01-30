import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-open-image',
  templateUrl: './open-image.page.html',
  styleUrls: ['./open-image.page.scss'],
})
export class OpenImagePage implements OnInit {


  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successfully Subscribed...!',
      duration: 1500,
      position: 'bottom',
      color:'light',
      cssClass:'toast-wrap'
    });

    await toast.present();
  }
  

}
