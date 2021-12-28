import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbilityDetailPageRoutingModule } from './ability-detail-routing.module';

import { AbilityDetailPage } from './ability-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbilityDetailPageRoutingModule
  ],
  declarations: [AbilityDetailPage]
})
export class AbilityDetailPageModule {}
