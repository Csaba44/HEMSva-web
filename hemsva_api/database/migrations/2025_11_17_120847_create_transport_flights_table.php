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
        Schema::create('transport_flights', function (Blueprint $table) {
            $table->id();
            $table->foreignId("base_id")->constrained();
            $table->foreignId("from_hospital_id")->constrained("hospitals", "id");
            $table->foreignId("to_hospital_id")->constrained("hospitals", "id");
            $table->text("description");
            $table->integer("reward_points");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transport_flights');
    }
};
