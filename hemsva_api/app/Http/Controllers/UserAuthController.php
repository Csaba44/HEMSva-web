<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserAuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate(
            [
                'name' => 'required|string',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|min:8',
            ],
            [
                "required" => ":attribute megadása kötelező",
                "string" => ":attribute szöveges tartalmú kell legyen",
                "email" => ":attribute formátuma E-mail kell legyen",
                "min" => ":attribute minimum hossza: :min",
                "max" => ":attribute maximum hossza: :max",
                "email.unique" => "Ez az E-mail cím már létezik."
            ],
            [
                "name" => "Név",
                "email" => "E-mail",
                "password" => "Jelszó"
            ]
        );
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json([
            'message' => 'User Created',
            'user' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        $loginUserData = $request->validate(
            [
                'email' => 'required|string|email',
                'password' => 'required|min:8',
            ],
            [
                "required" => ":attribute megadása kötelező",
                "string" => ":attribute szöveges tartalmú kell legyen",
                "email" => ":attribute formátuma E-mail kell legyen",
                "min" => ":attribute minimum hossza: :min",
            ],
            [
                "email" => "E-mail",
                "password" => "Jelszó"
            ]
        );
        $user = User::where('email', $loginUserData['email'])->first();
        if (! $user || ! Hash::check($loginUserData['password'], $user->password)) {
            return response()->json([
                'message' => 'Invalid Credentials',
            ], 401);
        }
        $token = $user->createToken($user->name . '-AuthToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'logged out',
        ]);
    }
}
