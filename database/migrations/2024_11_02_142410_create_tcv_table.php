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
        Schema::create('tissue_culture_vaccines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('route', 50)->nullable();
            $table->date('day0')->nullable();
            $table->date('day3')->nullable();
            $table->date('day7')->nullable();
            $table->date('day14')->nullable(); // or 1month
            $table->date('day28')->nullable(); // 
            $table->integer('vacine_id')->nullable(); // brand
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tissue_culture_vaccines');
    }
};
