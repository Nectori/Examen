import { Component } from '@angular/core';

import { RegistrosService, Registro } from 'src/app/services/registros.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private registrosService: RegistrosService) {}
  onSubmitForm() {
    // Obtén los valores del formulario
    const codigo = (<HTMLInputElement>document.getElementById('inputCodigo')).value;
    const fecha = (<HTMLInputElement>document.getElementById('inputFecha')).value;
    const cliente = (<HTMLInputElement>document.getElementById('inputCliente')).value;
    const telefono = (<HTMLInputElement>document.getElementById('inputTelefono')).value;
    const descripcion = (<HTMLInputElement>document.getElementById('inputDescripcion')).value;
  
    // Crea una instancia del modelo Registro con los datos del formulario
    const nuevoRegistro: Registro = {
      Codigo: codigo,
      Fecha: fecha,
      Cliente: cliente,
      Telefono: telefono,
      Descripcion: descripcion
    };
  
    // Agrega el nuevo registro al servicio
    this.registrosService.agregarRegistro(nuevoRegistro);
  
    // Limpia el formulario después de agregar el registro
    this.limpiarFormulario();
  }
  
  // Función para limpiar el formulario después de agregar el registro
  limpiarFormulario() {
    (<HTMLInputElement>document.getElementById('inputCodigo')).value = '';
    (<HTMLInputElement>document.getElementById('inputFecha')).value = '';
    (<HTMLInputElement>document.getElementById('inputCliente')).value = '';
    (<HTMLInputElement>document.getElementById('inputTelefono')).value = '';
    (<HTMLInputElement>document.getElementById('inputDescripcion')).value = '';
  }
}
