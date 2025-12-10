<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Base extends Model
{
    protected $fillable = [
        "name",
        "icao_code",
        "msfs_ident",
        "xplane_ident"
    ];
    public function users() {
        return $this->hasMany(User::class);
    }
    public function hospitals() {
        return $this->belongsToMany(Hospital::class);
    }
    public function missions() {
        return $this->belongsToMany(Mission::class);
    }
}
