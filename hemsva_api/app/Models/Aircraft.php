<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Aircraft extends Model
{
    protected $fillable = [
        "registration",
        "type_designator",
        "base_id",
        "status",
        "comment"
    ];

    public function base(): BelongsTo {
        return $this->belongsTo(Base::class);
    }

    public function bookings(): HasMany {
        return $this->hasMany(Booking::class);
    }
}
