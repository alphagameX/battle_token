<?php

namespace App\Http\Controllers\club;

use App\Http\Controllers\Controller;
use App\Models\Club;
use App\Models\Token\BlackToken;
use App\Models\Token\WhiteToken;
use App\Trait\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthClubController extends Controller
{
    use JsonResponse;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'unauthorized']]);
    }


    public function unauthorized() {
        return $this->response(403, [false]);
    }

    public function dashboard() {
        return 'dashboard';
    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return $this->response(200, [
                'error' => true,
                'msg' => 'le mot de passe ou l\'email est invalide'
            ]);
        }

        $user = Club::all()->where('email', '=', $request->email)->first();

        if($user != null) {
            if(Hash::check($request->password, $user->password)) {
                if(($token = Auth::login($user)) != false) {
                    $white = WhiteToken::add($token, $user->id);
                    return $this->createNewToken($token);       
                }
            }
        }
    
        return $this->response(200, [
            'error' => true,
            'msg' => 'le mot de passe ou l\'email est invalide'
        ]);;
    }

    public function logout() {
        $bearer = request()->bearerToken();
        $black = BlackToken::add($bearer);
        return $this->response(200, [true]);
    }

    public function getData() {
        return Auth::user();
    }


    protected function createNewToken($token) {
        return $this->response(200, [
            'access_token' => $token,
            'expires_in' => Auth::factory()->getTTL() * 60,
            'club' => auth()->user()
        ]);
    }
}
