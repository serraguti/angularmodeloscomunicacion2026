import { Component } from '@angular/core';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class JugadoresComponent {
  jugadores: Jugador[] = []

  async mostrarJugadores(): Promise<void> {
    let path = "documents/jugadores.json";
    let response = await fetch(path);
    let datos = await response.json();
    for (let elem of datos){
      let player = new Jugador(elem.nombre, elem.imagen);
      this.jugadores.push(player);
    }
  }
}
