import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessDetailsPageRoutingModule } from './business-details-routing.module';

import { BusinessDetailsPage } from './business-details.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BusinessDetailsPageRoutingModule
  ],
  declarations: [BusinessDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BusinessDetailsPageModule {}
