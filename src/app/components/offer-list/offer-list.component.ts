import { Component, OnInit } from '@angular/core';
import Offer from "../../classes/Offer";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  offer_list: Offer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.offer_list.push(
      {
        id: 1,
        image: 'http://lorempixel.com/400/100/food/food/',
        description: 'Alter triticums ducunt ad elevatus. A falsis, quadra teres parma.'
      },
      {
        id: 2,
        image: 'http://lorempixel.com/400/100/food/food/',
        description: 'Alter triticums ducunt ad elevatus. A falsis, quadra teres parma.'
      }
    )
  }

}
