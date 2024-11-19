<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TCVRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
   /**
     * Get the validation rules that apply to the request.
     */
    public function attributes()
    {
        return [
            'day0' => 'Day 0',        
            'day3' => 'Day 3',        
            'day7' => 'Day 7',        
            'day14' => 'Day 14',        
            'day28' => 'Day 28', 
            'vaccine_id' => 'Brand name'     
       ];
    }
}
