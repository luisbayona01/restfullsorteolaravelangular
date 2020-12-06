import {ModuleWithProviders}  from '@angular/core';
import {Routes,RouterModule}  from '@angular/router';
import {RegistroComponent}    from './registro/registro.component'
import {ContentComponent}     from './content/content.component'
import {GanadoresComponent}   from './ganadores/ganadores.component';
import {AdminComponent}       from     './admin/admin.component' ;
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes:Routes=[
{path:'',component:ContentComponent},
{path:'Registrarse',component:RegistroComponent},
{path:'ganadores',component:GanadoresComponent},
{path:'administrador',component:AdminComponent },
{path:'dashboard',component:DashboardComponent },
]

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);