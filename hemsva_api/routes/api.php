<?php

use App\Http\Controllers\AircraftController;
use App\Http\Controllers\AircraftLocationController;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\UserAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [UserAuthController::class, 'register']);
Route::post('/login', [UserAuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UserAuthController::class, 'logout']);

    Route::get("/bases", [BaseController::class, "index"]);
    Route::post("/bases", [BaseController::class, "store"]);

    Route::get("/aircraft", [AircraftController::class, "index"]);
    Route::post("/aircraft", [AircraftController::class, "store"]);

    Route::put('/logger/location', [AircraftLocationController::class, 'update']);
    Route::delete('/logger/location', [AircraftLocationController::class, 'disconnect']);
});
