<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Usuarios;
use Carbon\Carbon;
class UsuariosController extends Controller
{
    public function show()
    {
        $usuarios = Usuarios::all();
        return $usuarios;
    }

    public function addParticipante(Request $request)
    {
        $usuarios = new Usuarios();
        $respuesta;
        $nombres = $request->input('NombreP');
        $apellidos = $request->input('ApellidosP');
        $correo = $request->input('email');
        $telefono = $request->input('Telefono');
        $cedula = $request->input('identificacion');
        $habeasdata = '1';
        $idciudad = $request->input('Ciudad');

        $fechahoradecreacion = Carbon::now('America/Bogota');
        $tipo_usuario = '1';
        $usuarios->nombres = $nombres;
        $usuarios->apellidos = $apellidos;
        $usuarios->correo = $correo;
        $usuarios->telefono = $telefono;
        $usuarios->cedula = $cedula;
        $usuarios->habeasdata = $habeasdata;
        $usuarios->idciudad = $idciudad;

        $usuarios->ganador = '0';
        $usuarios->fechahoradecreacion = $fechahoradecreacion;
        $usuarios->tipo_usuario = $tipo_usuario;

        $validadParticipante = $this->participantes($cedula);

        if ($validadParticipante != 0) {
            $respuesta[] = 'este usuario ya esta registrado';
        } elseif ($usuarios->save()) {
            $respuesta[] = 'operacion  exitosa';
        }
        return $respuesta;
    }

    public function ciudades(Request $request)
    {
        $iddepartamento = $request->input('id_depto');

        $ciudad = DB::table('ciudad')
            ->select('idciudad', 'valor')
            ->where('id_depto', $iddepartamento)
            ->get();

        return $ciudad;
    }

    public function departamentos()
    {
        $departamento = DB::table('departamentos')
            ->select('iddepartamento', 'valor')
            ->get();
        return $departamento;
    }

    public function participantes($cedula)
    {
        /*comprovamos que el usuario que se registra no haiga participado*/
        $Usuarios = Usuarios::where('cedula', $cedula)->get();
        $UsuariosCount = $Usuarios->count();
        return $UsuariosCount;
    }

    public function Sortear()
    {
        $minUser = DB::table('Usuarios')
            ->select('idusuarios')
            ->where('ganador', '0')
            ->where('tipo_usuario', '1')
            ->min('idusuarios');
        $maxUser = DB::table('Usuarios')
            ->select('idusuarios')
            ->where('ganador', '0')
            ->where('tipo_usuario', '1')
            ->max('idusuarios');
        $Usuarios = DB::table('Usuarios')
            ->select('idusuarios')
            ->where('ganador', '0')
            ->where('tipo_usuario', '1')
            ->get();
        $UsuariosCount = $Usuarios->count();
        /*limite de premios por ganadores si decimos que son 5 premios deben haber solo 5 */
        $premios = DB::table('Usuarios')
            ->select('idusuarios')
            ->where('ganador', '1')
            ->where('tipo_usuario', '1')
            ->get();

        if ($UsuariosCount >= '5' && $premios->count() <= '5') {
            $numero_aleatorio = rand($minUser, $maxUser);
            foreach ($Usuarios as $user) {
                //print_r();
                $idusuarios = $user->idusuarios;

                if ($numero_aleatorio == $idusuarios) {
                    $usuarios = Usuarios::find($idusuarios);
                    $usuarios->ganador = '1';
                    $usuarios->save();
                }
            }
        }
    }
    public function ganadores()
    {
        $ganadores = DB::table('ganadores')
            ->select('nombres', 'apellidos', 'ciudad', 'fecharegistro')
            ->get();
        return $ganadores;
    }
    public function logear(Request $request)
    {
        $correo = trim($request->input('Username'));
        $password = trim($request->input('Password'));

        $user = Usuarios::where('correo', $correo)
            ->where('cedula', $password)
            ->where('tipo_usuario', '2')
            ->get();

        return $user->count();
    }
    public function dataparticipantes()
    {
        $getparticipantes = DB::table('participantes')->get();
        return $getparticipantes;
    }
}