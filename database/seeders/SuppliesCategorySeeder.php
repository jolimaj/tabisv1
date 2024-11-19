<?php

namespace Database\Seeders;

use App\Models\SuppliesCategory;
use Illuminate\Database\Seeder;

class SuppliesCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $supplies_category = [
            ['name' => 'Syringe'],
            ['name' => 'Vaccine',],
        ];

        foreach ($supplies_category as $data) {
            SuppliesCategory::create($data);
        }  
    }
}
