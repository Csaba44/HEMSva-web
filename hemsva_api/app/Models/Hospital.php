<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Hospital extends Model
{
    protected $fillable = [
        "name",
        "icao_code",
        "msfs_ident",
        "xplane_ident"
    ];

    public function bases()
    {
        return $this->belongsToMany(Base::class);
    }

    public function diagnoses()
    {
        return $this->belongsToMany(DiagnosisType::class);
    }

    public function inboundFlights()
    {
        return $this->hasMany(TransportFlight::class, 'to_hospital_id');
    }
    public function outboundFlights()
    {
        return $this->hasMany(TransportFlight::class, 'from_hospital_id');
    }
    //lehet mukodik, de nem tudom hogy van e ra szukseg
    // public function allFlights() {
    //     return $this->outboundFlights()->union($this->outboundFlights());
    // }
}
