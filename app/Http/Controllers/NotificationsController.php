<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

use App\Models\Notifications;
use App\Models\Supplies;

class NotificationsController extends Controller
{
    public function index()
    {
        $notifications = Notifications::all();
        return Inertia::render('Notifications', ['notifications' => $notifications]);
    }

    public function markAsRead(Request $request)
    {
        Notifications::where('id', $request->id)
            ->update(['read' => 1]);
        return redirect()->back(); 

    }

    public function create(Notifications $notifications, Supplies $supplies)
    {
        // Check Stock Levels
        $outOfStockItems =$supplies::where('quantity', '<=', 1000)->get();

        // Save notifications for out-of-stock items
        foreach ($outOfStockItems as $item) {
            $notifications->create([
                'title' => 'Stock out alert',
                'message' => "There is $item->quantity left for $item->name.",
            ]);
        }
        $this->info('Product stock check completed.');

        // Check supplies that going to expire next month
        $nearExpirationDate = $supplies->whereUpcomingExpiration();

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
