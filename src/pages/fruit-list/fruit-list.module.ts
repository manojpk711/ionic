import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FruitListPage } from './fruit-list';

@NgModule({
  declarations: [
    FruitListPage,
  ],
  imports: [
    IonicPageModule.forChild(FruitListPage),
  ],
})
export class FruitListPageModule {}
