import { Component, OnInit } from '@angular/core';
import {Ganadores} from '../interfaces/ganadores';
import {ToastrService } from 'ngx-toastr';
import {ConsultaService} from '../services/Consulta.services';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html',
  styleUrls: ['./ganadores.component.css']
})
export class GanadoresComponent implements OnInit {
ganadores:Ganadores[];
 constructor(private toastr: ToastrService, private ConsultaService:ConsultaService,private httpClient:HttpClient) {
this.sorteo();
this.getganadores();

   }

  ngOnInit() {
  }


sorteo(){
this.ConsultaService.getsorteo().subscribe( (data)=>{ 
   
   },(error)=>{
      console.log(error)
    });

}

getganadores():void{

  let elem: any;
  this.ConsultaService.getGanadores().subscribe( (data:Ganadores[])=>{this.ganadores=data;
  
  },(error)=>{
      console.log(error)
    });

  }
}
