<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Yarn extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function product()
    {
        return $this->belongsToMany(Product::class);
    }
}
