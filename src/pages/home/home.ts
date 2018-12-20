import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  WooComerce: any;
  constructor(public navCtrl: NavController) {
    this.WooComerce = WC({
     // url: "https://floriculturasantarosalia.com.br/",
     url: "https://floriculturasantarosalia.com.br/",
   
      consumerKey: " ",
      consumerSecret: " "

    });

    this.WooComerce.getAsync("products").then((data)=> {
      console.log(JSON.parse(data.body));
    }, (err) => {
      console.log(err)
    })

  }

}
