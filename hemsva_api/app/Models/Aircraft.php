<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aircraft extends Model
{
    protected $fillable = [
        "registration",
        "type_designator",
        "base_id",
        "engine_hours",
        "status",
        "comment"
    ];
}
