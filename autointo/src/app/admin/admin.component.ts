import { Component, OnInit } from '@angular/core';
import {ConsultaService} from '../services/Consulta.services';
import { ToastrService } from 'ngx-toastr';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 public useradmin:any;
  constructor(private router: Router,private toastr: ToastrService, private ConsultaService:ConsultaService,private httpClient:HttpClient) {
   this.useradmin={
		email:'',
		Password:''
   }
  

   }

  ngOnInit() {
  }
  
  LoginAdmin(){
 if(this.useradmin.email==''){
 this.toastr.error('el campo de email no puede estar vacio');
 }
 if(this.useradmin.Password==''){
 	this.toastr.error('el campo de contraseña no puede estar vacio');
 }

var params=$("#Login_Admin").serialize();
 this.ConsultaService.autenticar(params).subscribe((data)=>{ 
 
   if(data==0){
this.toastr.error('correo o contraseña incorrectos');
$("#email").val('');
$("#contraseña").val('');
   }
  if(data==1){
sessionStorage.setItem("statussesion", "1"); 	
this.router.navigate(['/dashboard'])
   }
   //this.toastr.success(data[0])
 
  
  },(error)=>{
      console.log(error)
    });

}



  }

