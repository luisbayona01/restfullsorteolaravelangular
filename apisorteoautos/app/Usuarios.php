<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
    public $timestamps = false;
    protected $table = 'usuarios';
    protected $primaryKey = 'idusuarios';
    protected $fillable = ['nombres', 'apellidos', 'correo', 'telefono', 'cedula', 'habeasdata', 'idciudad', 'ganador', 'fechahoradecreacion', 'tipo_usuario'];
}