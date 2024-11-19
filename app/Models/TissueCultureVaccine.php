<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class TissueCultureVaccine extends Model
{
    use HasFactory;
    

    
    public function supplies(): HasOne
    {
        return $this->hasOne(Supplies::class);
    }

    public function patients(): HasOne
    {
        return $this->hasOne(Patients::class);
    }

}