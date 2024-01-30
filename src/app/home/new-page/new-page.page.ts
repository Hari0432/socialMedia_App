import { Component, OnInit } from '@angular/core';

import { AlertController , ModalController, PopoverController} from '@ionic/angular'; 
import { OpenPagePage } from './../open-page/open-page.page';
import { OpenViewPage } from '../open-view/open-view.page';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {
  items= [];

  like: number = 0;

  constructor(public modalCtrl : ModalController, public popoverCtrl : PopoverController) { }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 10; i++) {
      this.items.push(`Post ${count + i}`);
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: OpenPagePage,
      breakpoints:[0.20],
      initialBreakpoint:0.20
    });
    return await modal.present();
  }

  async openView() {
    const view = await this.popoverCtrl.create({
      component: OpenViewPage,
      side: 'top',
      
    });
    return await view.present();
  }

  likeCount(){
    const count = this.like+1;
    this.like =count;

    console.log(this.like)
  }


  

  
}
