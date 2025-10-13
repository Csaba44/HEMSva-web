<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TransportFlight extends Model
{
    protected $fillable = [
        'base_id',
        'from_hospital_id',
        'to_hospital_id',
        'description',
        'reward_points',
    ];

    public function base(): BelongsTo
    {
        return $this->belongsTo(Base::class);
    }

    public function fromHospital(): BelongsTo
    {
        return $this->belongsTo(Hospital::class, 'from_hospital_id');
    }

    public function toHospital(): BelongsTo
    {
        return $this->belongsTo(Hospital::class, 'to_hospital_id');
    }

    public function bookings()
    {
        return $this->morphMany(Booking::class, 'flight');
    }
}
