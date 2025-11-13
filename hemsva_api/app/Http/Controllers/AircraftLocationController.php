<?php

namespace App\Http\Controllers;

use App\Events\AircraftDisconnected;
use App\Events\LocationUpdate;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AircraftLocationController extends Controller
{
    public function update(Request $request): JsonResponse
    {
        $validated = $request->validate([
            "callsign" => "required|string|max:50",
            'latitude' => 'required|numeric|between:-90,90',
            'longitude' => 'required|numeric|between:-180,180',
            'altitude' => 'required|numeric|min:0|max:30000',
        ]);

        $user = $request->user();


        LocationUpdate::dispatch(
            $validated['callsign'],
            $validated['latitude'],
            $validated['longitude'],
            $validated['altitude'],
            $user->name
        );

        return response()->json([
            "status" => "success",
            "message" => "Location updated.",
            "data" => $validated
        ], 200);
    }

    public function disconnect(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'callsign' => 'required|string|max:50',
            'reason' => 'nullable|string|max:100',
        ]);

        $user = $request->user();


        AircraftDisconnected::dispatch(
            $validated['callsign'],
            $validated['reason'] ?? 'manual',
            $user->name
        );



        return response()->json([
            "status" => "success",
            "message" => "Aircraft disconnected.",
            "data" => $validated
        ], 200);
    }
}
