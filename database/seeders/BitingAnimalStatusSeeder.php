<?php

namespace Database\Seeders;

use App\Models\BitingAnimalStatus;
use Illuminate\Database\Seeder;

class BitingAnimalStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $animal_status = [
            ['name' => 'Alive'],
            ['name' => 'Dead',],
            ['name' => 'Lost',],
        ];
        foreach ($animal_status as $data) {
            BitingAnimalStatus::create($data);
        }
    }
}
