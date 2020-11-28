import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  currentItems: Item[];
  data: any = '';
  fruitList = [];
  fruits = 1;
  defaultItem: any = [
    {
      "id":1,
      "avatar": 'assets/img/marty-avatar.png',
      "name": "Fruit",
      "profilePic": "assets/img/speakers/bear.jpg",
      "about": "Burt is a Bear.",
    },
    {
      "id":2,
      "avatar": 'assets/img/marty-avatar.png',
      "name": "Vegetable",
      "profilePic": "assets/img/speakers/bear.jpg",
      "about": "Burt is a Bear.",
    }
  ];
  slideItem: any = [{
    "avatar": 'assets/img/marty-avatar.png'
  },
  {
    "avatar": 'assets/img/badu-live.png',
  },
  {
    "avatar": 'assets/img/ian-avatar.png'
  },
  {
    "avatar": 'assets/img/nin-live.png'
  }
  ];
  constructor(public http: HttpClient, public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
    this.getFruits();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  xYz(item: Item) {
    this.navCtrl.push('FruitListPage', {
      item: item
    });
  }

  getFruits() {
    this.http.get('assets/grocery.json').subscribe(res => {
      this.data = res;
      this.data.forEach(element => {
        this.fruitList.push(element);
      });
    })
  }

}
