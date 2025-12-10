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
        Schema::create('aircraft_logbook_pages', function (Blueprint $table) {
            $table->id();
            $table->string("aircraft_registration");
            $table->foreign("aircraft_registration")->references("registration")->on("aircraft");
            $table->string("reg_mark", 3);
            $table->string("type_variant");
            $table->string("pilot_name");
            $table->string("preflight_name_initials", 3);
            $table->string("preflight_time", 4);
            $table->string("aircraft_operational_signature");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aircraft_logbook_pages');
    }
};
