<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    protected $fillable = [
        "user_id",
        "content"
    ];
    public function user() {
        return $this->hasOne(User::class);
    }
}
