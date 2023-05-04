import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePosterPageRoutingModule } from './create-poster-routing.module';

import { CreatePosterPage } from './create-poster.page';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorPickerModule,
    CreatePosterPageRoutingModule
  ],
  declarations: [CreatePosterPage]
})
export class CreatePosterPageModule {}
