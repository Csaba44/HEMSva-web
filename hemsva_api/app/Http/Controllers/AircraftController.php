<?php

namespace App\Http\Controllers;

use App\Enums\AircraftStatus;
use App\Http\Resources\AircraftResource;
use App\Models\Aircraft;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class AircraftController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $aircraft = Aircraft::with("bases")->get();

        return response()->json($aircraft);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                "registration" => "required|string|size:6",
                "type_designator" => "required|string|size:4",
                "base_id" => "required|exists:bases,id",
                "engine_hours" => "required|integer|min:0",
                "status" => ["required", "string", Rule::enum(AircraftStatus::class)],
                "comment" => "string|min:1"
            ],
            [
                "required" => ":attribute megadása kötelező",
                "string" => ":attribute szöveges tartalmú kell legyen",
                "size" => ":attribute hossza pontosan :size karakter kell legyen",
                "min" => ":attribute minimum hossza: :min",
                "base_id.exists" => "Ez a bázis nem létezik",
                "integer" => ":attribute mezőnek szám értéknek kell lennie",
                Enum::class => ':attribute értéke nem megfelelő.',
            ],
            [
                "registration" => "A lajstromjel",
                "type_designator" => "A légijármű típusjelölés",
                "base_id" => "A bázis",
                "engine_hours" => "Az üzemóra",
                "status" => "A légijármű státusz",
                "comment" => "A comment"
            ]
        );

        $aircraft = Aircraft::create($validated);

        return response()->json(["message" => "A légijármű sikeresen hozzáadva.", "aircraft" => $aircraft]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Aircraft $aircraft)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Aircraft $aircraft)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Aircraft $aircraft)
    {
        //
    }
}
