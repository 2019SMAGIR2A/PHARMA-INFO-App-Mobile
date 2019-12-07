import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pharmacies',
  templateUrl: './list-pharmacies.page.html',
  styleUrls: ['./list-pharmacies.page.scss'],
})
export class ListPharmaciesPage implements OnInit {
  _pharmacies: { nom: string; ville: string; commune: string; contact: string; email: string; docteur: string; image: string; }[];

  constructor(public global:GlobalService, public router:Router) { 
    this._pharmacies =this.phamarcies

  }
  phamarcies =[
    {
      nom:'Pharmacie saint benoit ',
      ville:'Abidjan',
      commune:'Marcory',
      contact:'22308976',
      email:'phciebenoit@gmail.com',
      docteur:'Dr Beke',
      image:'./../../assets/hospital.png'

    },
    {
      nom:'Pharmacie Emmeraude',
      ville:'Bouake',
      commune:'2 Plateau',
      contact:'22456754',
      email:'phcieemeraude@gmail.com',
      docteur:'Dr Serge',
      image:'./../../assets/hospital.png'

    }
]
  ngOnInit() {
  }
  SearchPharmacie(ev){
    console.log(ev.target.value)
    let text=ev.target.value
    this.phamarcies = this._pharmacies
    this.phamarcies = this.phamarcies.filter((pharmacie)=>{
      return (pharmacie.nom.toLowerCase().indexOf(text.toLowerCase()) > -1) || (pharmacie.ville.toLowerCase().indexOf(text.toLowerCase()) > -1) || (pharmacie.docteur.toLowerCase().indexOf(text.toLowerCase()) > -1)
    })
  }
  detailPharmacie(pharmacie){
    this.global.pharmacie=pharmacie
    this.router.navigate(["/detail-pharmacie"])
  }

}
