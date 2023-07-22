<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WashOption extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function productions()
    {
        return $this->hasMany(Production::class);
    }
}
