<?php

use App\Enums\FlightType;
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
            $table->foreignId("flown_by_user_id")->constrained("users", "id");
            $table->enum("flight_type", ["Transport flight", "Mission", "Repositioning"]);
            $table->foreignId("mission_id")->nullable()->constrained();
            $table->foreignId("transport_flight_id")->nullable()->constrained();
            $table->foreignId("repositioning_id")->nullable()->constrained();
            $table->string("aircraft_registration");
            $table->foreign("aircraft_registration")->references("registration")->on("aircraft");
            $table->bigInteger("distance_flown");
            $table->boolean("is_nvfr");
            $table->enum("completion_status", ["Booked", "Ongoing", "Pending review", "Rejected", "Accepted"]);
            $table->foreignId("reviewed_by_user_id")->constrained("users", "id");
            $table->datetime("start_time");
            $table->dateTime(("end_time"));
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
