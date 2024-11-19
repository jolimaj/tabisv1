<?php

namespace Database\Seeders;

use App\Models\BiteTypes;
use Illuminate\Database\Seeder;

class BiteTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $records = [
            ['name' => 'Bite'],
            ['name' => 'None-Bite'],
        ];
        foreach ($records as $data) {
            BiteTypes::create($data);
        }
    }
}
