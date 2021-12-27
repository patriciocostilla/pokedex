import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeDetailPageRoutingModule } from './type-detail-routing.module';

import { TypeDetailPage } from './type-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeDetailPageRoutingModule
  ],
  declarations: [TypeDetailPage]
})
export class TypeDetailPageModule {}
