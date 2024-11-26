<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

use App\Console\Commands\ExpiryStockOutNotification; // Import your command

class Kernel extends ConsoleKernel
{
    protected $commands = [
        ExpiryStockOutNotification::class,  // Register your command
    ];

    protected function schedule(Schedule $schedule)
    {
        // Make sure this is scheduled to run daily or at the correct time
        $schedule->command('app:expiry-stock-out-notification')->dailyAt('00:00');; // Adjust frequency if necessary
        $schedule->command('app:send-message-notification')->dailyAt('00:00'); // Adjust frequency if necessary
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands'); // Make sure this line exists
        require base_path('routes/console.php');
    }
}
