<?php

namespace App\Http\Controllers\Club;

use App\Http\Controllers\Controller;
use App\Models\Club;
use Illuminate\Http\Request;

class GetClubController extends Controller
{
    public function getAll() {
        $club = Club::all();
        return json_encode($club);
    }
}
