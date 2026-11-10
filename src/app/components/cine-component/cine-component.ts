import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine-component',
  standalone: false,
  styleUrl: './cine-component.css',
  templateUrl: './cine-component.html',
})
export class CineComponent implements OnInit {
  arraypelis: Pelicula[] = [];

  constructor(
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    let path = "documents/cine.json";
    let response = await fetch(path)
    let datos = await response.json();
    for (let elem of datos){
      let datovideo = "https://www.youtube.com/embed/" + elem.YouTube;
      let peli = new Pelicula(elem.Titulo, elem.Argumento, elem.Fecha_Estreno
        , elem.Director, elem.Duracion, datovideo, elem.Genero, elem.pais);
      this.arraypelis.push(peli);
    }
    this._cdr.detectChanges();
  }
}
