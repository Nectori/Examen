import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registro, RegistrosService } from 'src/app/services/registros.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  registros:Registro[]=[];
  
  ngOnInit(): void{
    this.registros = this._registrosService.getRegistros();
    console.log(this.registros);


  }
  
  constructor(private _registrosService:RegistrosService, private router:Router){

  }
  eliminar(index: number) {
    this._registrosService.eliminarRegistro(index);
  }
  
  
  verRegistros(idx:number){
    console.log(idx);
    this.router.navigate(['/registro',idx])
    }
    showModal: boolean = false;

    abrirVentanaEmergente() {
      this.showModal = true;
    }
  
    cerrarVentanaEmergente() {
      this.showModal = false;
    }
  

}
