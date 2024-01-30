import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenViewPageRoutingModule } from './open-view-routing.module';

import { OpenViewPage } from './open-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenViewPageRoutingModule
  ],
  declarations: [OpenViewPage]
})
export class OpenViewPageModule {}
