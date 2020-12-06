import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ConsultaService} from '../services/Consulta.services';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Ciudad} from '../interfaces/ciudad';
import {Departamentos} from '../interfaces/departamentos';

@Component({
  selector: 'registroParticipantes',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
   public participantes:any;
   ciudades:Ciudad[];
   departamento: Departamentos[];

  constructor(private toastr: ToastrService, private ConsultaService:ConsultaService,private httpClient:HttpClient) {
   this.participantes={
		NombreP:'',
		ApellidosP:'',
		email:'',
	  identificacion:'',
    Telefono:'',
		Departamento:'',
   }
  this.getdepartamentos();

  
   }
  

  ngOnInit() {
  }


 getdepartamentos():void{

 
  this.ConsultaService.getDepartamento().subscribe( (data:Departamentos[])=>{this.departamento=data;
 

  $(document).ready(function(){
   let elem: any;
   elem =  $("#Departamento");
   elem.selectpicker();


   }) 
  
 
  },(error)=>{
      console.log(error)
    });

  }


CiudadChange(value){
let elem: any;
let  formData:any = new FormData();
formData.append("id_depto",value); 
//JSON.stringify(params)
  this.ConsultaService.getCiudad(formData).subscribe( (data:Ciudad[])=>{this.ciudades=data;
   elem = $("#Ciudad");
   elem.selectpicker('destroy');
  $(document).ready(function(){
 
  elem.selectpicker();

  
   }) 
  
 
  },(error)=>{
      console.log(error)
    });

}
sorteo(){
this.ConsultaService.getsorteo().subscribe( (data)=>{ 
   
   },(error)=>{
      console.log(error)
    });

}


SololetrasNombresChanged($valor){
 //var regex = /^[a-zA-Z ]+$/;
  //return regex.test($valor);
   if (!/^[a-zA-Z ]+$/.test($valor)) {
      this.toastr.error(' porfavor digite solo letras');
      $('#nombreP').val('');
      return false;
}
}
SololetrasApellidosChanged($valor){
 //var regex = /^[a-zA-Z ]+$/;
  //return regex.test($valor);
   if (!/^[a-zA-Z ]+$/.test($valor)) {
      this.toastr.error(' porfavor digite solo letras');
      $('#Apellidos').val('');
      return false;
}
}
  
SolonumerosIdentificacionChanged(valor){
 //console.log(valor.replace(/[^ 0-9]+/ig,""));
 if (!/^[ 0-9]*$/i.test(valor)) {
      this.toastr.error(' porfavor digite solo numeros');
      $('#identificacion').val('');
      return false;
}
}
SolonumerosTelefonoChanged(valor){
 if (!/^[ 0-9]*$/i.test(valor)) {
      this.toastr.error(' porfavor digite solo numeros');
        $('#Telefono').val('');
        return false;
}

}
RegistrarParticipantes(){

//console.log(this.participantes);
 
 if($('#nombreP').val()==''){
 this.toastr.error('el campo de nombre  es obligatorio');
    return false
  }
  if( $('#Apellidos').val()==''){
     this.toastr.error('el campo de Apellidos es obligatorio');
    return false
  }
  if (!/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this.participantes.email)){
     this.toastr.error('el campo de email  no es correcto');
    return false

  }

 if (this.participantes.identificacion==''){
   this.toastr.error('el campo de cedula es obligatorio');
    return false
 } 
 if ( $('#identificacion').val()==''){
   this.toastr.error('el campo de celular es obligatorio');
    return false
 }  

 if ($("#Departamento").val()==''){
    this.toastr.error('porfavor seleccione  un departamento');
    return false
 }  

 if ($("#Ciudad").val()==''){
    this.toastr.error('porfavor seleccione  una ciudad');
    return false
 }  

 
  //
 
 if (!$('#habeasdata').is( ":checked" )){
   this.toastr.error('porfavor acepte los terminos y condiciones');
    return false

}
 var params=$("#participantes").serialize();
 this.ConsultaService.saveParticipante(params).subscribe((data)=>{ 

   this.toastr.success(data[0])
  //data[0];  

  $('#nombreP').val('');
  $('#email').val(''); 
  $('#Apellidos').val('')
  $('#identificacion').val('')
  $('#Telefono').val('');
  $('#identificacion').val('')
   let elem: any;
   let departamento: any;
   elem = $("#Ciudad");
   elem.selectpicker('destroy');
  $("#Ciudad").val('');
  elem =  $("#Departamento")
  elem.selectpicker('destroy');
  $("#Departamento").val('');
   departamento =  $("#Departamento")
   departamento.selectpicker()
   //$(".form-check-input").removeAttr('checked');
   $(".form-check-input").prop('checked', false); 
  },(error)=>{
      console.log(error)
    });

}


}
