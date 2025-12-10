<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AircraftLogbookPageEntry extends Model
{
    protected $fillable = [
        "id",
        "aicraft_logbook_page_id",
        "crew_pic_initials",
        "crew_hemstc_initials",
        "crew_medp_initials",
        "planning_time",
        "flight_charact",
        "from",
        "to",
        "flt_time_utc_takeoff",
        "flt_time_utc_landing",
        "flt_time_utc_flt_time",
        "start",
        "landing",
        "hook_cycle",
        "hook_time",
        "total_fuel_ls",
        "total_fuel_main",
        "total_fuel_rs",
        "remaining_fuel_ls",
        "refueled_liter",
        "refueled_kg",
        "extra_info"
    ];
}
