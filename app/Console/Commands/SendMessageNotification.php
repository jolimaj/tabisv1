<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\BiteHistory;

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
        $allBite =  BiteHistory::all();

        $scheduleInTwoDays = BiteHistory::dateInTwoDays($allBite);

        $result = '';
        foreach ($scheduleInTwoDays as $item) {
            $result = $item->item;
        }
        $this->info('Notification Sent to.'.' '.$result);
    }
}
