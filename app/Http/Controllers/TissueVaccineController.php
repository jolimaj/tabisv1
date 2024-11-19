<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\TissueCultureVaccine;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Response;


class TissueVaccineController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Inventory/Index');
    }

    public function store(): RedirectResponse
    {
        TissueCultureVaccine::patients()->create(
            Request::validate([
                'route' => ['required', 'max:50'],
                'day0' => ['required', 'max:50'],        
                'day3' => ['required', 'max:50'],        
                'day7' => ['required', 'max:50'],        
                'day14' => ['required', 'max:50'],        
                'day28' => ['required', 'max:50'],        
                'tcv_id' => ['required', 'max:10'],
            ])
        );

        return Redirect::route('patients')->with('success', 'Patient Record created.');
    }
}
