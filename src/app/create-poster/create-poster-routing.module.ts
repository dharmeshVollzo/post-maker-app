import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePosterPage } from './create-poster.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePosterPageRoutingModule {}
