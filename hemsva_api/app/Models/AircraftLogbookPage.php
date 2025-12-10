<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AircraftLogbookPage extends Model
{
    protected $fillable = [
        "aircraft_registration",
        "reg_mark",
        "type_variant",
        "pilot_name",
        "preflight_name_initials",
        "preflight_time",
        "aircraft_operational_signature"
    ];
}
