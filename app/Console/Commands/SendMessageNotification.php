<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\BiteHistory;
use App\Models\TissueCultureVaccine;
use App\Services\SMSNotification;

class SendMessageNotification extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-message-notification';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send SMS notif';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $scheduleInTwoDays = TissueCultureVaccine::dateInTwoDays();
        $this->info(collect($scheduleInTwoDays));

        $schedules;
        foreach ($scheduleInTwoDays as $schedule) {
            $patientDetails = BiteHistory::patientDetails($schedule['id'])->get();
            $schedules = [
                'tcvID'=>$schedule['id'],
                'schedules'=>$schedule['schedules'],
                'patients'=>$patientDetails,
            ];
        }
        
        $res = [];
        foreach (($schedules['patients']) as $patient) {
            $smsService = new SMSNotification();
            $smsService->sendMessage('+63' . preg_replace('/^0/', '', $patient->phone));
            $res[] = [
                'phone'=>$patient->phone,
            ];
        }
        
        $this->info(collect($res));
        // $this->info('Notification Sent to.'.' '.$result);
    }
}
