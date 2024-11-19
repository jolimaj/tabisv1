<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Builder;

class AnimalType extends Model
{
    use HasFactory;


    public function biteHistory(): HasMany
    {
        return $this->hasMany(BiteHistory::class);
    }

    public function scopeCountPatientPerAnimalCategory(Builder $query)
    {
        $data = $query->withCount('biteHistory')
                    ->get()
                    ->each(function ($animal) {
                        $totalRecords = AnimalType::count();
                        $animal->percentage = ($animal->bite_history_count / $totalRecords) * 100;
                        $animal->percentage = round($animal->percentage, 2);
                        return $animal;
                    });
        
        return $data;
    }

}