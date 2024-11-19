<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class PatientRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function attributes()
    {
        return [
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'phone' => 'Mobile Number',
            'Phone' => 'Mobile Number',
            'address' => 'Address',
            'age' => 'Age',
            'date_of_consult' => 'Consultation Date',
            'date_of_bite' => 'Date of Bite',
            'place' => 'Place',
            'sex' => 'Gender',
            'type_of_bite_id' => 'Type of Bite',
            'site_id' => 'Site',
            'animal_type_id' => 'Animal Type',
            'category_id' => 'Category',
            'outcome_id' => 'Outcome',
            'animal_status_id' => 'Animal Status',
            'washed' => 'Washed',
            'rig_date' => 'RIG Date',
            'day0' => 'Day 0',        
            'day3' => 'Day 3',        
            'day7' => 'Day 7',        
            'day14' => 'Day 14',        
            'day28' => 'Day 28', 
            'vaccine_id' => 'Brand name'     
       ];
    }

}
