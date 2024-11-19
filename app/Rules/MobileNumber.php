<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\Rule;

class MobileNumber implements Rule
{
    /**
    * Determine if the validation rule passes.
    *
    * @param  string  $attribute
    * @param  mixed  $value
    * @return bool
    */
   public function passes($attribute, $value)
   {
       return preg_match('/^09\d{9}$/', $value);
   }

   /**
    * Get the validation error message.
    *
    * @return string
    */
   public function message()
   {
       return 'The :attribute must be a valid Philippine mobile number.';
   }
}
