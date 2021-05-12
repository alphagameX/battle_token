<?php

use App\Events\MyEvent;
use App\Http\Controllers\club\AuthClubController;
use App\Http\Controllers\Club\CreateClubController;
use App\Http\Controllers\Club\GetClubController;
use App\Http\Controllers\MediaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// CLUB
Route::group(['prefix' => 'club'], function () {

    Route::group(['prefix' => 'create'], function () {
        Route::post('/', [CreateClubController::class, 'create']);
        Route::post('check', [CreateClubController::class, 'isNotValidField']);
    });

    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', [AuthClubController::class, 'login']);
        Route::get('unauthorized', [AuthClubController::class, 'unauthorized'])->name('unauthorized');

        Route::middleware('token')->group(function () {
            Route::get('data', [AuthClubController::class, 'getData']);
            Route::get('dashboard', [AuthClubController::class, 'dashboard'])->name('dashboard');
            Route::get('logout', [AuthClubController::class, 'logout']);
        });
    });

    Route::get('all', [GetClubController::class, 'getAll']);
});

Route::group(['prefix' => 'media'], function () {
    Route::get('background', [MediaController::class, 'background']);
});






