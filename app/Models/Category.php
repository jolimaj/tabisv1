<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

class Category extends Model
{
    use HasFactory;
    
    public function patients(): HasOne
    {
        return $this->hasOne(Patients::class);
    }

    public function biteHistory(): HasMany
    {
        return $this->hasMany(BiteHistory::class);
    }
}