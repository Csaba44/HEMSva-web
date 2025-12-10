<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mission extends Model
{
    protected $fillable = [
        "location_name",
        "latitude",
        "longitude",
        "vitals",
        "diagnosis_type_id",
        "description",
        "reward_points"
    ];

    public function bases() {
        return $this->belongsToMany(Base::class);
    }
}
