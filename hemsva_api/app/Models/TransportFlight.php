<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransportFlight extends Model
{
    protected $fillable = [
        "base_id",
        "from_hospital_id",
        "to_hospital_id",
        "description",
        "reward_points"
    ];
    public function fromHospital() {
        return $this->belongsTo(Hospital::class, 'from_hospital_id');
    }
    public function toHospital() {
        return $this->belongsTo(Hospital::class, 'to_hospital_id');
    }
}
