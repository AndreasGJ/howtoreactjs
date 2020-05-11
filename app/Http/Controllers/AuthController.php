<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Auth;

class AuthController extends Controller
{
    public function me(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'data' => $user
        ]);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $data['active'] = true;

        $attempt = Auth::attempt($data);

        if (!$attempt) {
            return response()->json([
                'message' => __('auth.failed')
            ], 401);
        }

        $user = Auth::user();

        return response()->json([
            'data' => [
                'token' => $user->createToken('default')->plainTextToken
            ]
        ]);
    }
}
