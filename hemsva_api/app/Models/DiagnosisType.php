<?php

namespace App\Models;

use App\Enums\FlightType;
use Illuminate\Database\Eloquent\Model;

class DiagnosisType extends Model
{
    protected $fillable = ["description"];

    public function hospitals() {
        return $this->belongsToMany(Hospital::class);
    }

    
}
