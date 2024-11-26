<?php

namespace Database\Seeders;

use App\Models\Outcome;
use Illuminate\Database\Seeder;

class OutcomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $outcomes = [
            ['name' => 'INC'],
            ['name' => 'Completed',],
            ['name' => 'Defaulter',],
        ];
        foreach ($outcomes as $data) {
            Outcome::create($data);
        }  
    }
}
