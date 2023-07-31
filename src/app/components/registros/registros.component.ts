import { Component } from '@angular/core';
import { Registro, RegistrosService } from 'src/app/services/registros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {
  registros:Registro[]=[];
  
  ngOnInit(): void{
    this.registros = this._registrosService.getRegistros();
    console.log(this.registros);


  }
  
  constructor(private _registrosService:RegistrosService, private router:Router){

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
