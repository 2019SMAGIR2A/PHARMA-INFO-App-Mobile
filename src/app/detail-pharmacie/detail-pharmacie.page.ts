import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-detail-pharmacie',
  templateUrl: './detail-pharmacie.page.html',
  styleUrls: ['./detail-pharmacie.page.scss'],
})
export class DetailPharmaciePage implements OnInit {
  pharmacie: {};

  constructor(public global:GlobalService) {
    this.pharmacie = this.global.pharmacie
   }

  ngOnInit() {
  }

}
