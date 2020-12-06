<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/Sortear', 'UsuariosController@Sortear');

Route::get('/showDepartamento', 'UsuariosController@departamentos');
Route::post('/showciudad', 'UsuariosController@ciudades');
Route::post('/saveParticipante', 'UsuariosController@addParticipante');
Route::get('/showganadores', 'UsuariosController@ganadores');

Route::post('/logear', 'UsuariosController@logear');
route::get('/participantes', 'UsuariosController@dataparticipantes');