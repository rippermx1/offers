import { Component, OnInit } from '@angular/core';
import Offer from "../../classes/Offer";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  offer_list: Offer[] = [];
  aux_offer_list: Offer[] = [];
  storeName: string = '';
  constructor() { }

  ngOnInit(): void {
    this.offer_list.push(
      {
        id: 1,
        image: 'http://lorempixel.com/400/100/food/',
        discount: 15,
        description: 'Alter triticums ducunt ad elevatus. A falsis, quadra teres parma.',
        storeName: 'Tottus',
        storeUrl: 'https://www.tottus.cl/tottus/',
        storeImage: 'tottus.jpg'
      },
      {
        id: 2,
        image: 'http://lorempixel.com/400/100/technics/',
        discount: 10,
        description: 'Alter triticums ducunt ad elevatus. A falsis, quadra teres parma.',
        storeName: 'Falabella',
        storeUrl: 'https://www.falabella.cl/',
        storeImage: 'fallabela.jpg'
      },
      {
        id: 3,
        image: 'http://lorempixel.com/400/100/transport/',
        discount: 5,
        description: 'Alter triticums ducunt ad elevatus. A falsis, quadra teres parma.',
        storeName: 'Lider',
        storeUrl: 'https://www.tottus.cl/tottus/',
        storeImage: 'lider.jpg'
      },
      {
        id: 4,
        image: 'http://lorempixel.com/400/100/nightlife/',
        discount: 5,
        description: 'Alter triticums ducunt ad elevatus. A falsis, quadra teres parma.',
        storeName: 'Sodimac',
        storeUrl: 'https://www.sodimac.cl/',
        storeImage: 'sodimac.png'
      },
      {
        id: 5,
        image: 'http://lorempixel.com/400/100/nature/',
        discount: 5,
        description: 'Alter triticums ducunt ad elevatus. A falsis, quadra teres parma.',
        storeName: 'Easy',
        storeUrl: 'https://www.easy.cl/',
        storeImage: 'easy.png'
      },
    )
    this.aux_offer_list = this.offer_list;
  }

  searchOffer() {
    if (this.storeName.toUpperCase().trim() == '') {
      this.offer_list = this.aux_offer_list;
    }
    this.offer_list = this.offer_list.filter(value => {
      return value.storeName.toUpperCase().trim().startsWith(this.storeName.toUpperCase().trim());
    });
  }
}
