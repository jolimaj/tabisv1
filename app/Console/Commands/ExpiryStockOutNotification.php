<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Notifications;
use App\Models\Supplies;

class ExpiryStockOutNotification extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:expiry-stock-out-notification';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Checks near expiring product and stock levels';

    /**
     * Execute the console command.
     */
    public function handle(Notifications $notifications, Supplies $supplies)
    {
        // Check Stock Levels
        $outOfStockItems =$supplies::where('quantity', '<=', 20)->get();

        // Save notifications for out-of-stock items
        foreach ($outOfStockItems as $item) {
            $notifications->create([
                'title' => 'Stock out alert',
                'message' => "There is $item->quantity left for $item->name.",
            ]);
        }
        $this->info('Product stock check completed.');

        // Check supplies that going to expire next month
        $nearExpirationDate = $supplies->whereUpcomingExpiration()->get();

        // Save notifications for out-of-stock items
        foreach ($nearExpirationDate as $supply) {
            $notifications->create([
                'title' => 'Expiration alert',
                'message' => "$toExpirsupplyed->name will be expire on $supply->date_expire.",
                'read' => false,
            ]);
        }
        $this->info('Product expiration check completed.');
    }
}
