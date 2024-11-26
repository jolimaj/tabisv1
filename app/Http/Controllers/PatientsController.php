<?php

namespace App\Http\Controllers;

use App\Models\Barangay;
use App\Models\Patient;
use App\Models\AnimalType;
use App\Models\BiteTypes;
use App\Models\BitingAnimalStatus;
use App\Models\Category;
use App\Models\Outcome;
use App\Models\Gender;
use App\Models\Site;
use App\Models\SuppliesCategory;
use App\Models\Supplies;
use App\Models\TissueCultureVaccine;
use App\Models\BiteHistory;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;

use App\Http\Requests\Auth\PatientRequest;
use App\Http\Requests\TCVRequest;

use App\Rules\MobileNumber;

class PatientsController extends Controller
{

    
    public function index(): Response
    {

        return Inertia::render('Patients/Index', [
            'filters' => Request::all('search', 'sex', 'animal_type_id', 'age'),
            'animals' => AnimalType::all(),
            'genders' => Gender::all(),
            'biteTypes' => BiteTypes::all(),
            'categorie' => Category::all(),
            'animalStatus' => BitingAnimalStatus::all(),
            'categories' => Category::all(),
            'outcome' => Outcome::all(),
            'barangays' => Barangay::all(),
            'site' => Site::all(),
            'supplies' => Supplies::all(),
            'suppliesCategory' => SuppliesCategory::all(),
            'tissueCultureVaccine' => TissueCultureVaccine::all(),
            'patients' => Auth::user()->account->patients()
                ->orderByName()
                ->filter(Request::only(
                    'search',
                    'sex',
                    'age',
                    'animal_type_id',
                    'barangay_id'
                ))
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($patient) => [
                    'id' => $patient->id,
                    'first_name' => $patient->first_name,
                    'middle_name' => $patient->middle_name,
                    'last_name' => $patient->last_name,
                    'date_of_consult' => $patient->date_of_consult,
                    'age' => $patient->age,
                    'address' => $patient->address,
                    'barangay_id' => $patient->barangay_id,
                    'phone' => $patient->phone,
                    'date_of_bite' => $patient->date_of_bite,
                    'place' => $patient->place,
                    'sex' => $patient->sex,
                    'site_id' => $patient->site_id,
                    'biteHistory' => BiteHistory::where('patient_id',$patient->id)->orderByDesc('id')->get()
                ]),
            ]);
    }

    public function validatePatients(PatientRequest $patientRequest)
    {
       
    }

    public function create(): Response
    {
        return Inertia::render('Patients/Create', [
            'animals' => AnimalType::all(),
            'genders' => Gender::all(),
            'biteTypes' => BiteTypes::all(),
            'categorie' => Category::all(),
            'animalStatus' => BitingAnimalStatus::all(),
            'categories' => Category::all(),
            'outcome' => Outcome::all(),
            'barangays' => Barangay::all(),
            'site' => Site::all(),
            'supplies' => Supplies::all()
                ->where('supplies_id', '!=', 1),
            'suppliesCategory' => SuppliesCategory::all(),
            'tissueCultureVaccine' => TissueCultureVaccine::all(),
            'current_user' => Auth::user()
        ]); 
    }

    public function store(PatientRequest $patientRequest): RedirectResponse
    {
        $patientRequest->validate([
            'first_name' => 'required|max:50',
            'middle_name' => 'max:50',
            'last_name' => 'required|max:50',
            'phone' => ['required', 'string', new MobileNumber],
            'address' => 'required|max:150',
            'age' => 'required|max:50',
            'date_of_consult' => 'required|max:50',
            'date_of_bite' => 'required|max:50',
            'place' => 'required|max:50',
            'sex' => 'required|max:10',
            'type_of_bite_id' => 'required|max:10',
            'site_id' => 'required|max:10',
            'animal_type_id' => 'required|max:10',
            'category_id' => 'required|max:10',
            'barangay_id' => 'required|max:10',
            'outcome_id' => 'required|max:10',
            'animal_status_id' => 'required|max:10',
            'washed' => 'required|max:10',
            'rig_date' => 'required|max:50',
            'remarks' => 'max:150',
            'route' => 'required|max:50',
            'day0' => 'required|max:50',  
            'vaccine_id' => 'required'
        ]);
        
        $userData = Patient::create([
            'first_name' => Request::get('first_name'),
            'middle_name' => Request::get('middle_name'),
            'last_name' => Request::get('last_name'),
            'phone' => Request::get('phone'),
            'address' => Request::get('address'),
            'age' => Request::get('age'),
            'sex' => Request::get('sex'),
            'barangay_id' => Request::get('barangay_id'),
            'account_id' => Request::get('account_id'),
        ]);

        $tvcData = TissueCultureVaccine::create([
            'route' => Request::get('route'),
            'day0' => Request::get('day0'),
            'day3' =>  Carbon::parse(Request::get('day0'))->copy()->addDays(3),
            'day7' => Carbon::parse(Request::get('day0'))->copy()->addDays(7),
            'day14' => Carbon::parse(Request::get('day0'))->copy()->addDays(14),
            'day28' => Carbon::parse(Request::get('day0'))->copy()->addDays(28),
            'vacine_id' => Request::get('vaccine_id')
        ]);
        
        BiteHistory::create([
            'patient_id' => $userData->id,
            'date_of_consult' => Request::get('date_of_consult'),
            'date_of_bite' => Request::get('date_of_bite'),
            'site_id' => Request::get('site_id'),
            'type_of_bite_id' => Request::get('type_of_bite_id'),
            'animal_type_id' => Request::get('animal_type_id'),
            'category_id' => Request::get('category_id'),
            'outcome_id' => Request::get('outcome_id'),
            'animal_status_id' => Request::get('animal_status_id'),
            'supplies_id' => 1,
            'washed' => Request::get('washed'),
            'place' => Request::get('place'),
            'tcv_id' => $tvcData->id,
            'rig_date' => Request::get('rig_date'),
            'remarks' => Request::get('remarks'),      
        ]);
        Supplies::whereIn('supplies_id', [1, Request::get('vaccine_id')])->decrement('quantity', 1);
        return Redirect::route('patients')->with('success', 'Patient Record created.');
    }

    public function edit(Patient $patient): Response
    {
        return Inertia::render('Patients/Edit', [
            'animals' => AnimalType::all(),
            'genders' => Gender::all(),
            'biteTypes' => BiteTypes::all(),
            'categorie' => Category::all(),
            'animalStatus' => BitingAnimalStatus::all(),
            'categories' => Category::all(),
            'barangays' => Barangay::all(),
            'outcome' => Outcome::all(),
            'site' => Site::all(),
            'supplies' => Supplies::all()
                ->where('supplies_id', '!=', 1),
            'suppliesCategory' => SuppliesCategory::all(),
            'tissueCultureVaccine' => TissueCultureVaccine::all(),
            'current_user' => Auth::user(),
            'patient' => [
                'id' => $patient->id,
                'first_name' => $patient->first_name,
                'middle_name' => $patient->first_name,
                'last_name' => $patient->last_name,
                'date_of_consult' => $patient->date_of_consult,
                'barangay_id' => $patient->barangay_id,
                'age' => $patient->age,
                'address' => $patient->address,
                'phone' => $patient->phone,
                'date_of_bite' => $patient->date_of_bite,
                'place' => $patient->place,
                'sex' => $patient->sex,
                'biteHistory' => BiteHistory::where('patient_id',$patient->id) ->orderByDesc('id')
                ->get()
            ],
        ]);
    }

    public function update(Patient $patient,
    TissueCultureVaccine $tissue,
    BiteHistory  $biteHistory
    ): RedirectResponse
    {
        $tissue->update([
            'route' => Request::get('route'),
            'day0' => Request::get('day0'),
            'day3' => Request::get('day3'),
            'day7' => Request::get('day7'),
            'day14' => Request::get('day14'),
            'vacine_id' => Request::get('vaccine_id')
        ]);

        $patient->update(
          [
            'first_name' => Request::get('first_name'),
            'middle_name' => Request::get('middle_name'),
            'last_name' => Request::get('last_name'),
            'phone' => Request::get('phone'),
            'address' => Request::get('address'),
            'age' => Request::get('age'),
            'sex' => Request::get('sex'),     
            'barangay_id' => Request::get('barangay_id'),
          ] 
        );

        $biteHistory->update([
            'patient_id' => $patient->id,
            'site_id' => Request::get('site_id'),
            'date_of_consult' => Request::get('date_of_consult'),
            'date_of_bite' => Request::get('date_of_bite'),
            'type_of_bite_id' => Request::get('type_of_bite_id'),
            'animal_type_id' => Request::get('animal_type_id'),
            'category_id' => Request::get('category_id'),
            'outcome_id' => Request::get('outcome_id'),
            'animal_status_id' => Request::get('animal_status_id'),
            'account_id' => Request::get('account_id'),
            'supplies_id' => 1,
            'washed' => Request::get('washed'),
            'tcv_id' => $tissue->id,
            'rig_date' => Request::get('rig_date'),
            'remarks' => Request::get('remarks'),   
            'place' => Request::get('place'),   
        ]);

        Supplies::whereIn('supplies_id', [1, Request::get('vaccine_id')])->decrement('quantity', 1);
        return Redirect::route('patients')->with('success', 'Patient Record updated.');
    }

    public function addNewEntry(Patient $patient): RedirectResponse
    {
        $tvcData = TissueCultureVaccine::create([
            'route' => Request::get('route'),
            'day0' => Request::get('day0'),
            'day3' =>  Carbon::parse(Request::get('day0'))->copy()->addDays(3),
            'day7' => Carbon::parse(Request::get('day0'))->copy()->addDays(7),
            'day14' => Carbon::parse(Request::get('day0'))->copy()->addDays(14),
            'day28' => Carbon::parse(Request::get('day0'))->copy()->addDays(28),
            'vacine_id' => Request::get('vaccine_id')
        ]);
        
        BiteHistory::create([
            'patient_id' => $patient->id,
            'date_of_consult' => Request::get('date_of_consult'),
            'date_of_bite' => Request::get('date_of_bite'),
            'site_id' => Request::get('site_id'),
            'type_of_bite_id' => Request::get('type_of_bite_id'),
            'animal_type_id' => Request::get('animal_type_id'),
            'category_id' => Request::get('category_id'),
            'outcome_id' => Request::get('outcome_id'),
            'animal_status_id' => Request::get('animal_status_id'),
            'supplies_id' => 1,
            'washed' => Request::get('washed'),
            'place' => Request::get('place'),
            'tcv_id' => $tvcData->id,
            'rig_date' => Request::get('rig_date'),
            'remarks' => Request::get('remarks'),      
        ]);
        Supplies::whereIn('supplies_id', [1, Request::get('vaccine_id')])->decrement('quantity', 1);
        return Redirect::route('patients')->with('success', 'Patient New Record created.');
    }
    
    public function destroy(Patient $patient): RedirectResponse
    {
        $patient->delete();

        return Redirect::back()->with('success', 'Patient Record deleted.');
    }

    public function restore(Patient $patient): RedirectResponse
    {
        $patient->restore();

        return Redirect::back()->with('success', 'Patient Record restored.');
    }
}
