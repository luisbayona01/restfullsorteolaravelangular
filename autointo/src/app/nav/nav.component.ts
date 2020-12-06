import { Component, OnInit } from '@angular/core';
import {ConsultaService} from '../services/Consulta.services';
@Component({
  selector: 'navegacion',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
//public status_session:any;
  constructor(public ConsultaService:ConsultaService ) { 
this.ConsultaService.sessionStatus=sessionStorage.getItem("statussesion");

  }

  ngOnInit() {
  }
 
}
