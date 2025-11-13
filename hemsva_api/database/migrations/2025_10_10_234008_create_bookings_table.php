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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('aircraft_id')->constrained();

            $table->unsignedBigInteger('flight_id');
            $table->string('flight_type');

            $table->enum('completion_status', ['booked', 'ongoing', 'completed', 'cancelled'])->default('booked');
            $table->enum('approval_status', ['accepted', 'pending', 'rejected']);
            $table->foreignId('handled_by')->nullable()->constrained('users');
            $table->dateTime('start_time')->nullable();
            $table->dateTime('end_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
