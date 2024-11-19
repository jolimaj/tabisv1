<?php

namespace App\Http\Controllers;


use App\Models\Supplies;
use App\Models\SuppliesCategory;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

use App\Http\Requests\SuppliesRequst;

class SuppliesController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Supplies/Index', [
            'filters' => Request::all('search', 'supplies_id', 'otherFilter'),
            'categories' => SuppliesCategory::all(),
            'supplies' => Auth::user()->account->supplies()
                ->orderByName()
                ->filter(Request::only(
                    'search', 'supplies_id', 'otherFilter'
                ))
                ->paginate(10)
                ->withQueryString()
                ->transform(fn ($supply) => [
                    'id' => $supply->id,
                    'name' => $supply->name,
                    'manufacturer' => $supply->manufacturer,
                    'dosage' => $supply->dosage,
                    'quantity' => $supply->quantity,
                    'date_received' => $supply->date_received,
                    'date_expire' => $supply->date_expire,
                    'category' => SuppliesCategory::where('id', $supply->supplies_id)->first()
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Supplies/Create', [
            'categories' => SuppliesCategory::all(),
            'current_user' => Auth::user()
        ]);
    }

    public function store(SuppliesRequst $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|max:50',
            'manufacturer' => 'required|max:50',
            'dosage' => 'required|max:50',
            'quantity' => 'required|max:50',
            'date_received' => 'required|max:50',
            'date_expire' => 'required|max:50',
            'supplies_id' => 'required|max:50'
        ]);
        Supplies::create([
            'name' => Request::get('name'),
            'manufacturer' => Request::get('manufacturer'),
            'dosage' => Request::get('dosage'),
            'quantity' => Request::get('quantity'),
            'date_received' => Request::get('date_received'),
            'date_expire' => Request::get('date_expire'),
            'supplies_id' => Request::get('supplies_id'),
            'account_id' => Request::get('account_id'),
        ]);
        return Redirect::route('medical-supplies')->with('success', 'Supply Record created.');
    }

    public function edit(Supplies $supplies): Response{
        return Inertia::render('Supplies/Edit', [
            'categories' => SuppliesCategory::all(),
            'current_user' => Auth::user(),
            'supply' => [
                'id' => $supplies->id,
                'name' => $supplies->name,
                'manufacturer' => $supplies->manufacturer,
                'dosage' => $supplies->dosage,
                'quantity' => $supplies->quantity,
                'date_received' => $supplies->date_received,
                'date_expire' => $supplies->date_expire,
                'category' => SuppliesCategory::where('id', $supplies->supplies_id)->first()
            ]
        ]);
    }

    public function update(Supplies $supplies): RedirectResponse
    {
        $supplies->update(
          [
            'name' => Request::get('name'),
            'dosage' => Request::get('dosage'),
            'quantity' => Request::get('quantity'),
            'date_received' => Request::get('date_received'),
            'date_expire' => Request::get('date_expire'),
          ] 
        );
        return Redirect::route('medical-supplies')->with('success', 'Supply Record created.');
    }
}
