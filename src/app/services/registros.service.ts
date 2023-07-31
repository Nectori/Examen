import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {


  private registros:Registro[]=[ 
    
        {
          Codigo: "1",
          Fecha: "31-07-2023",
          Cliente: "José Martínez",
          Telefono: "0912345678",
          Descripcion: "Descripción del registro 1"
        },
        {
          Codigo: "2",
          Fecha: "31-07-2023",
          Cliente: "María Ramírez",
          Telefono: "0912345679",
          Descripcion: "Descripción del registro 2"
        },
        {
          Codigo: "3",
          Fecha: "31-07-2023",
          Cliente: "Juan Torres",
          Telefono: "0912345680",
          Descripcion: "Descripción del registro 3"
        },
        {
          Codigo: "4",
          Fecha: "31-07-2023",
          Cliente: "Laura Gómez",
          Telefono: "0912345681",
          Descripcion: "Descripción del registro 4"
        },
        {
          Codigo: "5",
          Fecha: "31-07-2023",
          Cliente: "Carlos Rodríguez",
          Telefono: "0912345682",
          Descripcion: "Descripción del registro 5"
        },
        {
          Codigo: "6",
          Fecha: "31-07-2023",
          Cliente: "Elena Pérez",
          Telefono: "0912345683",
          Descripcion: "Descripción del registro 6"
        },
        {
          Codigo: "7",
          Fecha: "31-07-2023",
          Cliente: "Diego García",
          Telefono: "0912345684",
          Descripcion: "Descripción del registro 7"
        },
        {
          Codigo: "8",
          Fecha: "31-07-2023",
          Cliente: "Ana Fernández",
          Telefono: "0912345685",
          Descripcion: "Descripción del registro 8"
        },
        {
          Codigo: "9",
          Fecha: "31-07-2023",
          Cliente: "Marta López",
          Telefono: "0912345686",
          Descripcion: "Descripción del registro 9"
        },
        {
          Codigo: "10",
          Fecha: "31-07-2023",
          Cliente: "Luis González",
          Telefono: "0912345687",
          Descripcion: "Descripción del registro 10"
        }
      
     
  ];

  getRegistros()
  {
    return this.registros;
  }

  getRegistro(idx: number): Registro
  {
  return this.registros[idx];
  }
  agregarRegistro(registro: Registro) {
    this.registros.push(registro);
  }
  eliminarRegistro(index: number) {
    this.registros.splice(index, 1);
  }

  constructor() {
    
    console.log("Servicio listo para usar")
   }
}


export interface Registro{
  Codigo : string;
  Fecha: string;
  Cliente: string;
  Telefono: string;
  Descripcion: string;
}

