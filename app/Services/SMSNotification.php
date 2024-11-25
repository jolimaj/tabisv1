<?php

namespace App\Services;
use Twilio\Rest\Client;

class SMSNotification
{

    public function sendMessage($recipients)
    {
        $message = 'Your next rabies vaccination is due in 2 days. Please visit the Animal Bite Center, thank you!';
        $account_sid = env("TWILIO_SID");
        $auth_token = env("TWILIO_AUTH_TOKEN");
        $twilio_number = env("TWILIO_NUMBER");
        $client = new Client($account_sid, $auth_token);
        $client->messages->create($recipients, 
                ['from' => $twilio_number, 'body' => $message] );
    }
}
