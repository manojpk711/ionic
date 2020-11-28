import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FruitListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fruit-list',
  templateUrl: 'fruit-list.html',
})
export class FruitListPage {
  item: any;
  data: any = '';
  fruitList = [];
  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item')
    console.log("mmmmmm",this.item)
    this.getFruits();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruitListPage');
  }

  getFruits(){
    this.http.get('assets/grocery.json').subscribe( res => {
          this.data = res;
          console.log("kkkk",this.data)
          this.data.forEach(element => {
            this.fruitList.push(element);
          });
    })
  }
}
