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
            $table->unsignedBigInteger('from_base_id');

            $table->foreign('from_base_id')->references('id')->on('bases');

            $table->unsignedBigInteger('to_base_id');
            $table->foreign('to_base_id')->references('id')->on('bases');

            $table->text('description')->nullable();
            $table->integer('reward_points');
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
