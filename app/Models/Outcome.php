<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Outcome extends Model
{
    use HasFactory;
    

    
    public function patients(): HasOne
    {
        return $this->hasOne(Patients::class);
    }

    public function scopeCountPatient(Builder $query)
    {
        return $query->withCount('patients');
    }

}