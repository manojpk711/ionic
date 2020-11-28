import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';

import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  data: any = '';
  countryCodeList = [];
  countryCode: any = '';
  constructor(public http: HttpClient,public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.getData();
  }


  getData() {
    this.http.get('assets/data.json').subscribe(res => {
      console.log("kansha",res)
      this.data = res;
      this.data.forEach(element => {
        this.countryCodeList.push(element);
      });
    });
  }

}
