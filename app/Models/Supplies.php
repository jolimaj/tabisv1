<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Supplies extends Model
{
    use HasFactory;
    

    
    public function suppliesCategory(): HasOne
    {
        return $this->hasOne(Supplies::class);
    }

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where($field ?? 'id', $value)->firstOrFail();
    }

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }

    public function scopeOrderByName($query)
    {
        $query->orderBy('name')->orderBy('name');
    }

    public function scopeWhereCategories($query, $suppliesID)
    {

        return $query->where('supplies_id', $suppliesID);
    }

    public function scopeWhereUpcomingExpiration($query)
    {
        return $query->where('date_expire', '<', Carbon::now()->addDays(30));
    }

    public function scopeWhereLowStock($query)
    {
        return $query->where('quantity',  '<', 20);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%');
            });
        })->when($filters['supplies_id'] ?? null, function ($query, $suppliesID) {
            $query->whereCategories($suppliesID);
        })->when($filters['otherFilter'] ?? null, function ($query, $otherFilter) {
                if ($otherFilter === "2") {
                    $query->whereUpcomingExpiration();
                } elseif ($otherFilter === "1") {
                    $query->whereLowStock();
                }
            });
    }

    

}