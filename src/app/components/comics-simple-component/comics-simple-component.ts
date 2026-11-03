import { Component } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-simple-component',
  standalone: false,
  styleUrl: './comics-simple-component.css',
  templateUrl: './comics-simple-component.html',
})
export class ComicsSimpleComponent {
  //declaramos un comic del tipo model
  comic: Comic;

  constructor(){
    //creamos un nuevo comic
    this.comic = new Comic("Asterix y Obelix"
      , "https://m.media-amazon.com/images/I/81emjTwm22L._AC_UF1000,1000_QL80_.jpg"
      , "Estos romanos están locos...");
  }
}
