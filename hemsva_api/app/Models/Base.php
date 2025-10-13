<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Base extends Model
{
    protected $fillable = [
        'name',
        'icao_code',
    ];

    public function trasportFlights(): HasMany
    {
        return $this->hasMany(Transport_Flight::class);
    }

    public function missions(): HasMany
    {
        return $this->hasMany(Mission::class);
    }

    public function fromBaseRepositionings(): HasMany
    {
        return $this->hasMany(Repositioning::class, 'from_base_id');
    }

    public function toBaseRepositionings(): HasMany
    {
        return $this->hasMany(Repositioning::class, 'to_base_id');
    }

    public function aircrafts(): HasMany
    {
        return $this->hasMany(Aircraft::class);
    }
}
