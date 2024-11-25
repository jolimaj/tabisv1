<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;
use DB; // Import the DB facade

use App\Models\Patient;
use App\Models\BiteHistory;
use App\Models\Barangay;
use App\Models\AnimalType;
use App\Models\Supplies;
use App\Models\SuppliesCategory;
use App\Models\TissueCultureVaccine;

class DashboardController extends Controller
{
    public function index(): Response
    {

        $scheduleInTwoDays = TissueCultureVaccine::dateInTwoDays();
  
        return Inertia::render('Dashboard/Index', [
            'patientPerMonth' => BiteHistory::bitePerMonth(),
            'patientPerAnimalCategory' => AnimalType::countPatientPerAnimalCategory(),
            'supplies' => Supplies::all(),
            'suppliesCategory' => SuppliesCategory::all(),
            'scheduleInTwoDays' => $scheduleInTwoDays
        ]);
    }

 
}
