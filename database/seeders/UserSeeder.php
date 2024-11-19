<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Account;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $account = Account::create(['name' => 'Animal Bite Treatment Center']);

        User::create([
            'account_id' => $account->id,
            'first_name' => 'tabis',
            'last_name' => 'tabis',
            'email' => 'tabis2024@gmail.com',
            'password' => 'adminTabis2024',
            'admin' => true,
        ]);
    }
}
