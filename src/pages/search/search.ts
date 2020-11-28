import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  data:Observable<any>;
  itemp:any;
  url:string;
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.url="https://jsonplaceholder.typicode.com/posts";
    this.getData();
   }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  getData(){
    this.data=this.http.get(this.url);
    this.data.subscribe(data=>{
      this.itemp=data;
    })
  }
}
