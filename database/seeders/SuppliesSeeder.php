<?php

namespace Database\Seeders;

use App\Models\Supplies;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class SuppliesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $supplies = [
            [
                'name' => 'Polypropylene',
                'manufacturer' => 'XX Company',
                'account_id' => '1',
                'supplies_id' => '1',
                'dosage' => '200 mg',
                'quantity' => '1000',
                'date_received' => Carbon::now(),
                'date_expire' => '2025-12-31'
            ],
            [
                'name' => 'Imovaxx',
                'manufacturer' => 'XX Company',
                'supplies_id' => '2',
                'account_id' => '1',
                'dosage' => '200 mg',
                'quantity' => '1000',
                'date_received' => Carbon::now(),
                'date_expire' => '2025-12-31'
            ],
        ];

        
        foreach ($supplies as $data) {
            Supplies::create($data);
        }  
    }
}
