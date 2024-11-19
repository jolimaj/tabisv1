<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

use DB; // Import the DB facade
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class Patient extends Model
{
    use HasFactory;
    
    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }

    public function biteHistory(): HasMany
    {
        return $this->hasMany(BiteHistory::class);
    }

    public function barangays(): HasOne
    {
        return $this->hasOne(Barangay::class);
    }
    
    public function categories(): HasOne
    {
        return $this->hasOne(Categories::class);
    }

    public function animals(): HasOne
    {
        return $this->hasOne(Animals::class);
    }
    
    public function biteType(): HasOne
    {
        return $this->hasOne(BiteType::class);
    }
    
    public function bitingAnimalStatus(): HasOne
    {
        return $this->hasOne(BitingAnimalStatus::class);
    }
    
    public function gender(): HasOne
    {
        return $this->hasOne(Gender::class);
    }

    public function site(): HasOne
    {
        return $this->hasOne(Site::class);
    }
    
    public function outcome(): HasOne
    {
        return $this->hasOne(Outcome::class);
    }

    public function tvc(): HasOne
    {
        return $this->hasOne(TissueCultureVaccine::class);
    }

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where($field ?? 'id', $value)->firstOrFail();
    }

    public function getNameAttribute()
    {
        return $this->first_name.' '.$this->last_name;
    }

    public function scopeOrderByName($query)
    {
        $query->orderBy('last_name')->orderBy('first_name');
    }

    public function scopeWhereGender($query, $sex)
    {
        switch ($sex) {
            case 1: return $query->where('sex', 1);
            case 2: return $query->where('sex', 2);
        }
    }

    public function scopeWhereBarangay($query, $id)
    {
        return $query->where('barangay_id', $id);
    }

    public function scopeWhereAnimal($query, $animalId)
    {
        return $query->whereHas('biteHistory', function ($query) use ($animalId) {
            $query->where('bite_histories.animal_type_id', $animalId)
                  ->join('patients', 'bite_histories.patient_id', '=', 'patients.id');
        });
    }

    public function scopeWhereDate($query, $date)
    {
        return $query->where('animal_type_id', $date);
    }


    public function scopeWhereAge($query, $age)
    {
        switch ($age) {
            case 1: return $query->whereBetween('age',[0,12]);
            case 2: return $query->whereBetween('age', [13,19]);
            case 3: return $query->whereBetween('age', [20,30]);
            case 4: return $query->whereBetween('age', [31,40]);
            case 5: return $query->whereBetween('age', [41,59]);
            case 6: return $query->where('age', '>=', 60);
        }
    }

    public function scopeWhereBiteYear($query, $year)
    {

        return $query->whereYear('date_of_bite', $currentYear)->get();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('first_name', 'like', '%'.$search.'%')
                    ->orWhere('last_name', 'like', '%'.$search.'%');
            });
        })->when($filters['sex'] ?? null, function ($query, $sex) {
            $query->whereGender($sex);
        })->when($filters['animal_type_id'] ?? null, function ($query, $animalId) {
            $query->whereAnimal($animalId);
        })->when($filters['age'] ?? null, function ($query, $age) {
            $query->whereAge($age);
        })->when($filters['barangay_id'] ?? null, function ($query, $barangay) {
            $query->whereBarangay($barangay);
        })->when($filters['year'] ?? null, function ($query, $year) {
            $query->whereBiteYear($year);
        });
    }

}
