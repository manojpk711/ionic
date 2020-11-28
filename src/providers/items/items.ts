import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {
  defaultItem:[
    {
      "avatar": 'assets/img/marty-avatar.png',
      "name": "Fruit",
      "profilePic": "assets/img/speakers/bear.jpg",
      "about": "Burt is a Bear."
    },
    {
      "avatar": 'assets/img/marty-avatar.png',
      "name": "Fruit",
      "profilePic": "assets/img/speakers/bear.jpg",
      "about": "Burt is a Bear."
    },
    {
      "avatar": 'assets/img/marty-avatar.png',
      "name": "Fruit",
      "profilePic": "assets/img/speakers/bear.jpg",
      "about": "Burt is a Bear."
    }
  ]
  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
