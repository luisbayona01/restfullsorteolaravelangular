import { Component, OnInit } from '@angular/core';
import {ConsultaService} from '../services/Consulta.services';
import {Participantes} from '../interfaces/participantes';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  participantes:Participantes[];
  dtoption: any;
 constructor(private router: Router,private ConsultaService:ConsultaService,private httpClient:HttpClient) {
  this.ConsultaService.sessionStatus='1';
  this.getParicipantes();
  this.sorteo();
   }

  ngOnInit() {
  }

sorteo(){
this.ConsultaService.getsorteo().subscribe( (data)=>{ 
   
   },(error)=>{
      console.log(error)
    });

}



getParicipantes():void{

  let elem: any;
  this.ConsultaService.getparticipantesGanadores().subscribe( (data:Participantes[])=>{this.participantes=data;
  $(document).ready(function(){
  this.dtoption={
   dom:'Bfrtip',
   buttons:[{
                extend:    'excelHtml5',
                text:      '<img src="https://img.icons8.com/color/18/000000/ms-excel.png" >',
                titleAttr: 'Excel',
                
            }]
 }
 elem = $("#Participantes");
 elem.DataTable(this.dtoption);


  })

  },(error)=>{
      console.log(error)
    });

  }


Logaout(){
 sessionStorage.removeItem("statussesion");
  this.router.navigate([''])
  this.ConsultaService.sessionStatus='0';
}


 
}
