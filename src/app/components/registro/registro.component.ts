import { Component } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registro:any={};

  constructor (private activatedRoute: ActivatedRoute, private _registroService:RegistrosService){
    this.activatedRoute.params.subscribe(params =>{
      this.registro = _registroService.getRegistro(params['id']);
      console.log(this.registro);
    })
  }
}
