<?php

namespace App\Models;

use App\Models\Loom;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function warp()
    {
        return $this->hasOne(Yarn::class, 'id', 'warp_id');
    }

    public function weft_1()
    {
        return $this->hasOne(Yarn::class, 'id', 'weft_1_id');
    }

    public function weft_2()
    {
        return $this->hasOne(Yarn::class, 'id', 'weft_2_id');
    }

    public function weft_3()
    {
        return $this->hasOne(Yarn::class, 'id', 'weft_3_id');
    }

    public function weft_4()
    {
        return $this->hasOne(Yarn::class, 'id', 'weft_4_id');
    }

    public function productions()
    {
        return $this->hasMany(Production::class);
    }

    public function loom()
    {
        return $this->belongsTo(Loom::class);
    }
}
