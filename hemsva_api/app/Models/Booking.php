<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        "flown_by_user_id",
        "flight_type",
        "mission_id",
        "transport_flight_id",
        "repositioning_id",
        "aircraft_registration",
        "distance_flown",
        "is_nvfr",
        "completition_status",
        "reviewed_by_user_id",
        "start_time",
        "end_time"
    ];
}
