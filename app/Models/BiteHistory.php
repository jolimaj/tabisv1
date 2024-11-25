<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use DB; // Import the DB facade
use Illuminate\Support\Str;

class BiteHistory extends Model
{
    use HasFactory;

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }

    public function patients(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }

    public function barangays(): HasOne
    {
        return $this->hasOne(Barangay::class);
    }
    
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function animalType(): BelongsTo
    {
        return $this->belongsTo(AnimalType::class);
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

    public function scopeWhereAnimal($query, $animalId)
    {
        return $query->where('animal_type_id', $animalId);
    }

    public function scopeCountPatientPerAnimalCategory(Builder $query)
    {
        $data = $query->withCount('animalType')
                    ->get()
                    ->each(function ($animal) {
                        $totalRecords = BiteHistory::count();
                        $animal->percentage = ($animal->animal_count / $totalRecords) * 100;
                        $animal->percentage = round($animal->percentage, 2);
                        return $animal;
                    });
        
        
        return $data;
    }

    public function scopeWhereBiteYear($query, $year)
    {

        return $query->whereYear('date_of_bite', $currentYear)->get();
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['animal_type_id'] ?? null, function ($query, $animalId) {
            $query->whereAnimal($animalId);
        });
    }

    public function scopeBitePerYear(Builder $query)
    {
        $currentYear = Carbon::now()->year;
        $startYear = $currentYear - 5;

        // Fetch data from the database, grouping by year
        $data = $query->select(DB::raw('YEAR(created_at) as year'), DB::raw('COUNT(*) as count'))
            ->whereYear('created_at', '>=', $startYear)
            ->groupBy('year')
            ->get();

        $yearData = [];
        for ($year = $startYear; $year <= $currentYear; $year++) {
            $yearData[$year] = 0;
        }

        // Populate the count values from the database query
        foreach ($data as $item) {
            $yearData[$item->year]= $item->count;
        }
        return $yearData;
    }

    public function scopeBitePerMonth(Builder $query)
    {

        // Get the current year
        $currentYear = now()->year;

        // Fetch data from the database, grouping by month
        $data = $query->select(DB::raw('MONTH(date_of_bite) as month'), DB::raw('COUNT(*) as count'))
            ->whereYear('date_of_bite', $currentYear)
            ->groupBy('month')
            ->get()
            ->pluck('count', 'month');

        // Create an array of all months in the current year
        $months = range(1, 12);

        // Merge the fetched data with the month array, filling missing months with 0
        $result = [];
        foreach ($months as $month) {
            $result[] = [
                'month' => $month,
                'count' => $data[$month] ?? 0,
            ];
        }

        return $result;
    }

    public function scopePatientDetails($query, $tcvId){
        return 
            $query->where('bite_histories.tcv_id', $tcvId)
                  ->join('patients', 'bite_histories.patient_id', '=', 'patients.id');
    }
}
