<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\PatientsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\TissueVaccineController;
use App\Http\Controllers\SuppliesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\NotificationsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth

Route::get('home', [AuthenticatedSessionController::class, 'index'])
    ->name('home')
    ->middleware('guest');

Route::get('login', [AuthenticatedSessionController::class, 'create'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [AuthenticatedSessionController::class, 'store'])
    ->name('login.store')
    ->middleware('guest');

Route::delete('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

// Dashboard

Route::get('/', [DashboardController::class, 'index'])
     ->name('dashboard')
     ->middleware('auth');

// Users

Route::get('users', [UsersController::class, 'index'])
    ->name('users')
    ->middleware('auth');

Route::get('users/create', [UsersController::class, 'create'])
    ->name('users.create')
    ->middleware('auth');

Route::post('users', [UsersController::class, 'store'])
    ->name('users.store')
    ->middleware('auth');

Route::get('users/{user}/edit', [UsersController::class, 'edit'])
    ->name('users.edit')
    ->middleware('auth');

Route::put('users/{user}', [UsersController::class, 'update'])
    ->name('users.update')
    ->middleware('auth');

Route::delete('users/{user}', [UsersController::class, 'destroy'])
    ->name('users.destroy')
    ->middleware('auth');

Route::put('users/{user}/restore', [UsersController::class, 'restore'])
    ->name('users.restore')
    ->middleware('auth');

// Patients

Route::get('patients', [PatientsController::class, 'index'])
    ->name('patients')
    ->middleware('auth');


Route::get('patients/create', [PatientsController::class, 'create'])
    ->name('patients.create');
    // ->middleware('auth');

Route::post('patients/validate', [PatientsController::class, 'validatePatients'])
    ->name('patients.validatePatients')
    ->middleware('auth');

Route::post('patients', [PatientsController::class, 'store'])
    ->name('patients.store')
    ->middleware('auth');

Route::get('patients/{patient}/edit', [PatientsController::class, 'edit'])
    ->name('patients.edit')
    ->middleware('auth');

Route::put('patients/{patient}', [PatientsController::class, 'update'])
    ->name('patients.update')
    ->middleware('auth');

Route::delete('patients/{patient}', [PatientsController::class, 'destroy'])
    ->name('patients.destroy')
    ->middleware('auth');

Route::get('patients/{patient}/newEntry', [PatientsController::class, 'edit'])
    ->name('patients.edit')
    ->middleware('auth');

Route::post('patients/{patient}/newEntry', [PatientsController::class, 'addNewEntry'])
    ->name('patients.addNewEntry')
    ->middleware('auth');

// Patients

Route::get('medical-supplies', [SuppliesController::class, 'index'])
    ->name('medical-supplies')
    ->middleware('auth');

Route::get('medical-supplies/create', [SuppliesController::class, 'create'])
    ->name('medical-supplies.create')
    ->middleware('auth');

Route::post('medical-supplies', [SuppliesController::class, 'store'])
    ->name('medical-supplies.store')
    ->middleware('auth');

Route::get('medical-supplies/{supplies}/edit', [SuppliesController::class, 'edit'])
    ->name('medical-supplies.edit')
    ->middleware('auth');

Route::put('medical-supplies/{supplies}', [SuppliesController::class, 'update'])
    ->name('medical-supplies.update')
    ->middleware('auth');

// Images

Route::get('/img/{path}', [ImagesController::class, 'show'])
    ->where('path', '.*')
    ->name('image');


Route::get('/dashboard', [PatientsController::class, 'index'])->name('dashboard');

Route::get('/profile/{user}', [UsersController::class, 'edit'])
    ->name('users.edit')
    ->middleware('auth');

Route::put('/notifications/{id}/mark-as-read', [NotificationsController::class, 'markAsRead']);