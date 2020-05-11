<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ProfileResource;
use Auth;

class AdminAppController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        return view('admin', [
            'prefilled_data' => [
                'profile' => $user ? ProfileResource::make($user) : null
            ]
        ]);
    }
}
