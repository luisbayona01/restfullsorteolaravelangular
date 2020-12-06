import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Ciudad} from '../interfaces/ciudad';
import {Departamentos} from '../interfaces/departamentos';
import {Ganadores} from '../interfaces/ganadores';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {
  sessionStatus:string; 
  Api='http://localhost:8000/';
  constructor(private htppClient:HttpClient) {}
 

  getDepartamento() {
    return this.htppClient.get(this.Api+'showDepartamento');
  }
 
  
 getCiudad(param){
    //const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'showciudad',param); 
  } 
 

 
  saveParticipante(param){
    const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'saveParticipante',param,{headers:headers});
  }

   getsorteo() {
    return this.htppClient.get(this.Api+'Sortear');
  }

  
  getGanadores() {
    return this.htppClient.get(this.Api+'showganadores');
  }
  

  getparticipantesGanadores() {
    return this.htppClient.get(this.Api+'participantes');
  }
  

 autenticar(param){
  const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'logear',param,{headers:headers});
  }

}