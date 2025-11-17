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
        Schema::create('repositionings', function (Blueprint $table) {
            $table->id();
            $table->foreignId("from_base_id")->constrained("bases", "id");
            $table->foreignId("to_base_id")->constrained("bases", "id");
            $table->string("description");
            $table->bigInteger("reward_points");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('repositionings');
    }
};
