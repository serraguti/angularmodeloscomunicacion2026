import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-buscar-cliente-component',
  standalone: false,
  styleUrl: './buscar-cliente-component.css',
  templateUrl: './buscar-cliente-component.html',
})
export class BuscarClienteComponent {
  @ViewChild("cajaid") cajaid!: ElementRef;
  cliente!: Cliente;

  async buscarCliente(): Promise<void> {
    //en la caja, escriben el numero de idcliente 14
    //recuperamos el valor de cajaid
    let idcliente = parseInt(this.cajaid.nativeElement.value);
    let path = "documents/clientesdatos.json";
    let response = await fetch(path);
    let datos = await response.json();
    //recorremos todos los datos del json
    for (let elem of datos){
      //debemos preguntar qué elemento es el 14
      if (elem.idcliente == idcliente){
        //lo tenemos y creamos el cliente
        this.cliente = new Cliente(elem.idcliente, elem.nombre
          , elem.paginaweb, elem.imagencliente)
      }
    }
    this._cdr.detectChanges();
  }

  constructor(
    private _cdr: ChangeDetectorRef
  ){}
}
