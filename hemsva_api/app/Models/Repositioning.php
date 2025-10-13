<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Repositioning extends Model
{
    protected $fillable = [
        'from_base_id',
        'to_base_id',
        'description',
        'reward_points',
    ];

    public function fromBase(): BelongsTo
    {
        return $this->belongsTo(Base::class, 'from_base_id');
    }

    public function toBase(): BelongsTo
    {
        return $this->belongsTo(Base::class, 'to_base_id');
    }

    public function bookings()
    {
        return $this->morphMany(Booking::class, 'flight');
    }
}
