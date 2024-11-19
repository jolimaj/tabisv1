<?php

namespace Database\Seeders;

use App\Models\AnimalType;
use Illuminate\Database\Seeder;

class AnimalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $animals = [
            ['name' => 'Pet Dog'],
            ['name' => 'Stray Dog Owned'],
            ['name' => 'Cat'],
            ['name' => 'Others'],
        ];

        foreach ($animals as $animalData) {
            AnimalType::create($animalData);
        }
    }
}
