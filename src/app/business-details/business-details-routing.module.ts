import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessDetailsPage } from './business-details.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BusinessDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class BusinessDetailsPageRoutingModule {}
