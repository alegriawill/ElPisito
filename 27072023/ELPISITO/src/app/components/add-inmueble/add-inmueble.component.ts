import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmueble } from 'src/app/models/entity';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-add-inmueble',
  templateUrl: './add-inmueble.component.html',
  styleUrls: ['./add-inmueble.component.css']
})
export class AddInmuebleComponent {
  
  aPoblaciones:any[];
  aTipos:any[];

  inmueble:Inmueble = {
    activo: 1,
    apertura: '',
    ascensor: 0,
    cp: '',
    descripcion: '',
    plazasGaraje: 0,
    jardin: 0,
    nBalcones: 0,
    nBanhos: 0,
    nHabitaciones: 0,
    nombreVia: '',
    numero: '',
    orientacion: '',
    amueblado: 0,
    trastero: 0,
    piscina: 0,
    planta: '',
    portada: 0,
    precio: 0,
    puerta: '',
    superficieConstruida: '',
    superficieUtil: '',
    tendedero: 0,
    tipoCalefaccion: '',
    titular: '',
    via: '',
    poblacion: {
      nombre:'',
      provincia:{
        nombre:'',
        activo:''
      },
      activo:''
    },
    tipo: {
      nombre:'',
      activo:''
    }
  }

  constructor(

    private _tipoService:TipoService,
    private _poblacionService:PoblacionService,
    private _inmuebleService:InmuebleService,
    private _router:Router

  ){}


  ngOnInit(): void {
    this.getDatos();

  }

  getDatos():void{
    //Rellenamos el select poblacion con los datos de la BBDD
    this._poblacionService.getPoblaciones().subscribe({

      next:(datos)=>{this.aPoblaciones =datos}
      ,
      error:(error)=>{this._router.navigate(["/error"])}
      ,
      complete:()=>{}
  
    });

      //Rellenamos el select tipo con los datos de la BBDD
      this._tipoService.getTipos().subscribe({

        next:(datos)=>{this.aTipos = datos}
        ,
        error:(error)=>{this._router.navigate(["/error"])}
        ,
        complete:()=>{}
    
      });
  

  }



add():void{

  /* this.poblacion.nombre = this.poblacion.nombre.toUpperCase();
  this.poblacion.activo = 1; */


  this._inmuebleService.addInmueble(this.inmueble).subscribe({

    next:(datos)=>{console.log(datos)}
    ,
    error:(error)=>{this._router.navigate(["/error"])}
    ,
    complete:()=>{this._router.navigate(["/list-inmueble"])}

  });

}



}
