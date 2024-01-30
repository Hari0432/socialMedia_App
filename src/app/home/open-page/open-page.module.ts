import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenPagePageRoutingModule } from './open-page-routing.module';

import { OpenPagePage } from './open-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenPagePageRoutingModule
  ],
  declarations: [OpenPagePage]
})
export class OpenPagePageModule {}
