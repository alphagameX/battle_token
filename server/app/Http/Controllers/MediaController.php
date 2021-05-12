<?php

namespace App\Http\Controllers;

use App\Trait\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{

    use JsonResponse;

    /*EXTERNAL*/
    public function background() {
        $files = Storage::allFiles('/background');

        $background = array();

        foreach($files as $file) {
            array_push($background, env('APP_URL') . '/storage/' . $file);
        }

        return $this->response(200, $background);
    }
}
