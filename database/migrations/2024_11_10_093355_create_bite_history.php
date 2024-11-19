<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bite_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date_of_consult', 25)->nullable();
            $table->date('date_of_bite', 25)->nullable();
            $table->integer('patient_id');
            $table->integer('site_id');
            $table->integer('type_of_bite_id');
            $table->integer('animal_type_id');
            $table->integer('category_id');
            $table->integer('outcome_id');
            $table->integer('animal_status_id');
            $table->integer('supplies_id');
            $table->boolean('washed')->default(false); //washing of bite
            $table->string('place', 150)->nullable(); // where biting occured

            $table->date('rig_date'); 
            $table->integer('tcv_id'); // Tissue Culture Vaccine Date Given
            $table->text('remarks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bite_histories');
    }
};
