<?php

namespace App\Http\Controllers\Club;

use App\Http\Controllers\Controller;
use App\Models\Club;
use App\Trait\JsonResponse;
use App\Trait\Uploader;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;


class CreateClubController extends Controller
{

    use Uploader, JsonResponse;

    /*INTERNAL FUNCTION*/
    private function alreadyExistInDb($key, $value) : bool {
        if($key != null && $value != null) {
            $club = Club::all()->where($key, "=", $value)->all();
            if(count($club) != 0)
                return true;
        }
        return false;
    }

    /*EXTERNAL FUNCTION*/
    public function isNotValidField(Request $req) {
        $valide = Validator::make($req->all(), array(
            'key' => array('required', Rule::in(array(
                'email',
                'username',
                'name',
                'password'
            ))),
            'value' => 'required'
        ));
        if(!$valide->fails()) {
            if($req->key == "email") {
                $valide = Validator::make($req->all(), array(
                    'value' => 'email|required'
                ));
                if($valide->fails())
                    return $this->response(200, array(true));
            } else if($req->key == "password") {
                $valide = Validator::make($req->all(), array(
                    'value' => array('required', Password::min(8)->letters()->numbers()->symbols())
                ));
                if($valide->fails())
                    return $this->response(200, array(true));
                else
                    return $this->response(200, array(false));
            }
            $alreadyExist = $this->alreadyExistInDb($req->key, $req->value);
            if($alreadyExist == false)
                return $this->response(200, array(false));
        }
        return $this->response(200, array(true));
    }

    public function create(Request $req) {


        // HANDLING REQUEST
        $valide = Validator::make($req->all(), array(
            'email' => 'email|required',
            'password' => array('required', Password::min(8)->letters()->numbers()->symbols()),
            'name' => 'required',
            'username' => 'required',
            'sex' => 'required',
            'profil' => 'required',
            'background' => 'required'
        ));
    
        if(!$valide->fails()) {
            $data = array(
                'email' => $req->email,
                'password' => $req->password,
                'name' => $req->name,
                'username' => $req->username,
                'background' => $req->background,
                'sex' => $req->sex
            );
            foreach($data as $key => $d) {
                if($key == "email" || $key == "name" || $key == "username") {
                    if($this->alreadyExistInDb($key, $d)) {
                        return $this->response(200, array('msg' => 'le valeur ' . $d . ' est déjà utilisé par quelqu\'un, veuillez la remplacez'));
                    }
                }
            }
            $path = 'storage/profil/';
            $file = $this->fileUpload($req->file('profil'), $path, ['png', 'jpeg', 'jpg']);
            $data = array_merge($data, ['profil' => $path . $file->getFilename()]);

            //dd($data);

            $club = new Club($data);
            // SAVING MODELS

            try {
                $club->saveOrFail();
            } catch(Exception $e) {
                return $this->response(200, [$e->getMessage()]);
            }
        } else {
            return $this->response(200, $valide->errors()->toArray());
        }

        return $this->response(200, array(true));
    }


}
