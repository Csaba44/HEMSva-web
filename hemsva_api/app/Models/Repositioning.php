<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Repositioning extends Model
{
    protected $fillable = [
        "from_base_id",
        "to_base_id",
        "description",
        "reward_points"
    ];
}
