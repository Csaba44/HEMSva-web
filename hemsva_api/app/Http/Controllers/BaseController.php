<?php

namespace App\Http\Controllers;

use App\Models\Base;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bases = Base::all();

        return response()->json($bases);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            "name" => "required|string",
            "icao_code" => "string|size:4",
            "msfs_ident" => "required|string|min:4|max:10",
            "xplane_ident" => "required|string|min:4|max:10",
        ],
        [
            "required" => ":attribute megadása kötelező",
            "string" => ":attribute szöveges tartalmú kell legyen",
            "icao_code.size" => ":attribute hossza pontosan :size karakter kell legyen",
            "min" => ":attribute minimum hossza: :min",
            "max" => ":attribute maximum hossza: :max"
        ],
        [
            "name" => "A bázis név",
            "icao_code" => "Az ICAO kód",
            "msfs_ident" => "Az MSFS azonosító",
            "xplane_ident" => "Az X-Plane azonosító"
        ]);

        $base = Base::create($validated);

        return response()->json(["message" => "A bázis sikeresen hozzáadva", "base" => $base], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
