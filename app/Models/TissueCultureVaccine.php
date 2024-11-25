<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

use Carbon\Carbon;
use Illuminate\Support\Arr;

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

    public function scopeDateInTwoDays($query) {
        $today = Carbon::today();
        $twoDaysLater = $today->copy()->addDays(2);
        $this.info($twoDaysLater);
        $dataArr = $query->get();
        $arrData = $dataArr->map(function ($tData) {
            return [
                'id' => $tData->id,
                'schedules' => [
                    'day0'=>$tData->day0,
                    'day3'=>$tData->day3,
                    'day14'=>$tData->day14,
                    'day7'=>$tData->day7,
                    'day2'=>$tData->day28,
                ]
            ];
        });
        $mapped = collect($arrData)->map(function ($item) {
            $item['schedules'] = collect($item['schedules'])->map(function ($schedule) {
                $today = now()->toDateString();
                $twoDaysLater = now()->addDays(2)->toDateString();
        
                return collect($schedule)->filter(function ($date) use ($today, $twoDaysLater) {
                    return $date == $twoDaysLater;
                })->toArray();
            });
        
            return $item;
        });

        $result=[];
        foreach ($mapped as $key => $value) {
            $result[] = [
                'id' => $value['id'],
                'schedules' =>[collect($value['schedules'])]
            ];
        }
        return $result;
        
    }
}