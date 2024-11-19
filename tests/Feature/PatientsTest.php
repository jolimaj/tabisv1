<?php

namespace Tests\Feature;

use App\Models\Account;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PatientsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create([
            // 'account_id' => Account::create(['name' => 'Acme Corporation'])->id,
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'johndoe@example.com',
            'admin' => true,
        ]);

        $this->user->account->patients()->createMany([
            [
                'first_name' => 'Martin',
                'last_name' => 'Abbott',
                'email' => 'martin.abbott@example.com',
                'phone' => '555-111-2222',
                'address' => '330 Glenda Shore',
                'city' => 'Murphyland',
                'region' => 'Tennessee',
                'country' => 'US',
                'postal_code' => '57851',
            ], [
                'first_name' => 'Lynn',
                'last_name' => 'Kub',
                'email' => 'lynn.kub@example.com',
                'phone' => '555-333-4444',
                'address' => '199 Connelly Turnpike',
                'city' => 'Woodstock',
                'region' => 'Colorado',
                'country' => 'US',
                'postal_code' => '11623',
            ],
        ]);
    }

    public function test_can_view_patients(): void
    {
        $this->actingAs($this->user)
            ->get('/patients')
            ->assertInertia(fn (Assert $assert) => $assert
                ->component('Patients/Index')
                ->has('patients.data', 2)
                ->has('patients.data.0', fn (Assert $assert) => $assert
                    ->has('id')
                    ->where('name', 'Martin Abbott')
                    ->where('phone', '555-111-2222')
                    ->where('city', 'Murphyland')
                    // ->where('deleted_at', null)
                )
                ->has('patients.data.1', fn (Assert $assert) => $assert
                    ->has('id')
                    ->where('name', 'Lynn Kub')
                    ->where('phone', '555-333-4444')
                    ->where('city', 'Woodstock')
                    // ->where('deleted_at', null)
                )
            );
    }

    public function test_can_search_for_contacts(): void
    {
        $this->actingAs($this->user)
            ->get('/patients?search=Martin')
            ->assertInertia(fn (Assert $assert) => $assert
                ->component('Patients/Index')
                ->where('filters.search', 'Martin')
                ->has('patients.data', 1)
                ->has('patients.data.0', fn (Assert $assert) => $assert
                    ->has('id')
                    ->where('name', 'Martin Abbott')
                    ->where('phone', '555-111-2222')
                    ->where('city', 'Murphyland')
                    ->where('deleted_at', null)
                )
            );
    }

    public function test_cannot_view_deleted_patients(): void
    {
        $this->user->account->patients()->firstWhere('first_name', 'Martin')->delete();

        $this->actingAs($this->user)
            ->get('/patients')
            ->assertInertia(fn (Assert $assert) => $assert
                ->component('Patients/Index')
                ->has('patients.data', 1)
                ->where('patients.data.0.name', 'Lynn Kub')
            );
    }

    public function test_can_filter_to_view_deleted_patients(): void
    {
        $this->user->account->patients()->firstWhere('first_name', 'Martin')->delete();

        $this->actingAs($this->user)
            ->get('/patients?trashed=with')
            ->assertInertia(fn (Assert $assert) => $assert
                ->component('Patients/Index')
                ->has('patients.data', 2)
                ->where('patients.data.0.name', 'Martin Abbott')
                ->where('patients.data.1.name', 'Lynn Kub')
            );
    }
}
