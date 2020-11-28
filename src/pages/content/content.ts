import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  ImagesArray:any=[];
  constructor(public navCtrl: NavController) { 
    this.ImagesArray=[
      {'image':'assets/img/badu-live.png'},
      {'image':'assets/img/bjork-live.jpg'},
      {'image':'assets/img/badu-live.png'},
      {'image':'assets/img/badu-live.png'},
      {'image':'assets/img/bjork-live.jpg'},
      {'image':'assets/img/badu-live.png'},
      {'image':'assets/img/badu-live.png'},
      {'image':'assets/img/bjork-live.jpg'},
      {'image':'assets/img/badu-live.png'},
      {'image':'assets/img/badu-live.png'},
      {'image':'assets/img/bjork-live.jpg'},
      {'image':'assets/img/badu-live.png'},
    ]
  }

}
