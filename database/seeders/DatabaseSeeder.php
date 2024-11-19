<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AnimalSeeder::class,
            BiteTypeSeeder::class,
            BitingAnimalStatusSeeder::class,
            CategoriesSeeder::class,
            GenderSeeder::class,
            OutcomeSeeder::class,
            UserSeeder::class,
            SuppliesCategorySeeder::class,
            SuppliesSeeder::class,
            SiteSeeder::class,
            BarangaySeeder::class
        ]);
    }
}
