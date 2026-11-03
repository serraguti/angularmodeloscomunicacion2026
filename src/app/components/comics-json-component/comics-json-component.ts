import { Component } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  arraycomics: Comic[] = [];

  async mostrarComics(): Promise<void> {
    let path = "documents/comics.json";
    //realizamos la peticion
    let response = await fetch(path);
    //convertimos los datos a json
    let datos = await response.json();
    //recorremos los datos json
    for (let elem of datos){
      //creamos un Comic por cada elemento del json
      let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
      //guardamos cada comic en el array
      this.arraycomics.push(comic);
    }
  }
}
