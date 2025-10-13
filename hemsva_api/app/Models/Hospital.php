<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Hospital extends Model
{
    protected $fillable = [
        'name',
        'icao_code',
    ];

    public function fromHospitalTransportFligths(): HasMany
    {
        return $this->hasMany(Transport_Flight::class, 'from_hospital_id');
    }

    public function toHospitalTransportFligths(): HasMany
    {
        return $this->hasMany(Transport_Flight::class, 'to_hospital_id');
    }

    public function toHospitalMission(): HasMany
    {
        return $this->hasMany(Mission::class, 'to_hospital_id');
    }
}
