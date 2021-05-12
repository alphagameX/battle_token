<?php 

namespace App\Trait;

use Illuminate\Support\Facades\Response;

trait JsonResponse {
    private function response(int $status, array $data = null) {
        return Response($data, $status, array(
            'Content-Type' => 'application/json'
        ));
    }
}