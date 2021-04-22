<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function(){
    Route::get('auth/me', 'AuthController@me');
});

Route::get('page', 'PageController@show');

Route::get('posts', 'PostController@index');
Route::get('posts/{post}', 'PostController@show');

Route::post('auth/login', 'AuthController@login');
