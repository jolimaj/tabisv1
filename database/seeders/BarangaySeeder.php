<?php

namespace Database\Seeders;

use App\Models\Barangay;
use Illuminate\Database\Seeder;

class BarangaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $barangays = [
            [
                "name" => "Alitao",
            ],
            [
                "name" => "Alupay",
            ],
            [
                "name" => "Angeles Zone I ",
            ],
            [
                "name" => "Angeles Zone II",
            ],
            [
                "name" => "Angeles Zone III",
            ],
            [
                "name" => "Angeles Zone IV",
            ],
            [
                "name" => "Angustias Zone I ",
            ],
            [
                "name" => "Angustias Zone II",
            ],
            [
                "name" => "Angustias Zone III",
            ],
            [
                "name" => "Angustias Zone IV",
            ],
            [
                "name" => "Anos",
            ],
            [
                "name" => "Ayaas",
            ],
            [
                "name" => "Baguio",
            ],
            [
                "name" => "Banilad",
            ],
            [
                "name" => "Calantas",
            ],
            [
                "name" => "Camaysa",
            ],
            [
                "name" => "Dapdap",
            ],
            [
                "name" => "Gibanga",
            ],
            [
                "name" => "Alsam Ibaba",
            ],
            [
                "name" => "Bukal Ibaba",
            ],
            [
                "name" => "Ilasan Ibaba",
            ],
            [
                "name" => "Nangka Ibaba",
            ],
            [
                "name" => "Palale Ibaba",
            ],
            [
                "name" => "Ibas",
            ],
            [
                "name" => "Alsam Ilaya",
            ],
            [
                "name" => "Bukal Ilaya",
            ],
            [
                "name" => "Ilasan Ilaya",
            ],
            [
                "name" => "Nangka Ilaya",
            ],
            [
                "name" => "Palale Ilaya",
            ],
            [
                "name" => "Ipilan",
            ],
            [
                "name" => "Isabang",
            ],
            [
                "name" => "Calumpang",
            ],
            [
                "name" => "Domoit Kanluran",
            ],
            [
                "name" => "Katigan Kanluran",
            ],
            [
                "name" => "Palale Kanluran",
            ],
            [
                "name" => "Lakawan",
            ],
            [
                "name" => "Lalo",
            ],
            [
                "name" => "Lawigue",
            ],
            [
                "name" => "Lita ",
            ],
            [
                "name" => "Malaoa",
            ],
            [
                "name" => "Masin",
            ],
            [
                "name" => "Mate",
            ],
            [
                "name" => "Mateuna",
            ],
            [
                "name" => "Mayowe",
            ],
            [
                "name" => "Opias",
            ],
            [
                "name" => "Pandakaki",
            ],
            [
                "name" => "Pook",
            ],
            [
                "name" => "Potol",
            ],
            [
                "name" => "San Diego Zone I ",
            ],
            [
                "name" => "San Diego Zone II",
            ],
            [
                "name" => "San Diego Zone III",
            ],
            [
                "name" => "San Diego Zone IV",
            ],
            [
                "name" => "San Isidro Zone I ",
            ],
            [
                "name" => "San Isidro Zone II",
            ],
            [
                "name" => "San Isidro Zone III",
            ],
            [
                "name" => "San Isidro Zone IV",
            ],
            [
                "name" => "San Roque Zone I ",
            ],
            [
                "name" => "San Roque Zone II",
            ],
            [
                "name" => "Domoit Silangan",
            ],
            [
                "name" => "Katigan Silangan",
            ],
            [
                "name" => "Palale Silangan",
            ],
            [
                "name" => "Talolong",
            ],
            [
                "name" => "Tamlong",
            ],
            [
                "name" => "Tongko",
            ],
            [
                "name" => "Valencia",
            ],
            [
                "name" => "Wakas",
            ],
        ];
        foreach ($barangays as $barangayData) {
            Barangay::create($barangayData);
        }
    }
}
