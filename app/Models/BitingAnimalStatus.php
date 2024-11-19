<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Builder;

class BitingAnimalStatus extends Model
{
    use HasFactory;    
    
    public function patients(): HasOne
    {
        return $this->hasOne(Patients::class);
    }

    public function biteHistory(): BelongsTo
    {
        return $this->belongsTo(BiteHistory::class);
    }

    public function scopeCountPatient(Builder $query)
    {
        return $query->withCount('bite_histories');
    }

    

}