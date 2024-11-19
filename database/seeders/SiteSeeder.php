<?php

namespace Database\Seeders;

use App\Models\Site;
use Illuminate\Database\Seeder;

class SiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $sites = [
            ['name' => 'Hand'],
            ['name' => 'Feet'],
            ['name' => 'Shoulder'],
            ['name' => 'Head'],
        ];

        foreach ($sites as $data) {
            Site::create($data);
        }
    }
}
