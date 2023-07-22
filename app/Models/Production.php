<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Production extends Model
{
    use HasFactory;

    protected $guarded = [];

    // Production has one Product
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    // Production has one Wash Option
    public function washOption()
    {
        return $this->belongsTo(WashOption::class);
    }

    // Production belong to user
    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
