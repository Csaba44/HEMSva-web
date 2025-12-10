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
        Schema::create('aircraft_logbook_page_entries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('aircraft_logbook_page_id'); 
            $table->string('crew_pic_initials', 3)->nullable();
            $table->string('crew_hemstc_initials', 3)->nullable();
            $table->string('crew_medp_initials', 3)->nullable();
            $table->integer('planning_time')->nullable();
            $table->enum('flight_charact', ['C', 'C/A', 'G', 'G/M', 'G/T', 'G/F', 'HC', 'HO'])->nullable();
            $table->string('from')->nullable();
            $table->string('to')->nullable();
            $table->time('flt_time_utc_takeoff')->nullable();
            $table->time('flt_time_utc_landing')->nullable();
            $table->time('flt_time_utc_flt_time')->nullable();
            $table->integer('start')->nullable();
            $table->integer('landing')->nullable();
            $table->integer('hook_cycle')->nullable();
            $table->integer('hook_time')->nullable();
            $table->integer('total_fuel_ls')->nullable();
            $table->integer('total_fuel_main')->nullable();
            $table->integer('total_fuel_rs')->nullable();
            $table->integer('remaining_fuel_ls')->nullable();
            $table->integer('refueled_liter')->nullable();
            $table->integer('refueled_kg')->nullable();
            $table->string('extra_info')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aircraft_logbook_page_entries');
    }
};