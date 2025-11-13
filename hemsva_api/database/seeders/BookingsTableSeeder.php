<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookingsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('bookings')->insert([
            [
                'user_id' => 2,
                'flight_type' => 'mission',
                'flight_id' => 1,
                'aircraft_id' => 1,
                'completion_status' => 'completed',
                'approval_status' => 'accepted',
                'handled_by' => 1,
                'start_time' => Carbon::now()->subDays(2)->setTime(14, 30),
                'end_time' => Carbon::now()->subDays(2)->setTime(15, 45),
                'created_at' => Carbon::now()->subDays(3),
            ],
            [
                'user_id' => 3,
                'flight_type' => 'transport_flight',
                'flight_id' => 1,
                'aircraft_id' => 2,
                'completion_status' => 'ongoing',
                'approval_status' => 'accepted',
                'handled_by' => 1,
                'start_time' => Carbon::now()->subHours(1),
                'end_time' => null,
                'created_at' => Carbon::now()->subDays(1),
            ],
            [
                'user_id' => 2,
                'flight_type' => 'repositioning',
                'flight_id' => 1,
                'aircraft_id' => 3,
                'completion_status' => 'booked',
                'approval_status' => 'pending',
                'handled_by' => null,
                'start_time' => Carbon::now()->addDays(1)->setTime(9, 0),
                'end_time' => null,
                'created_at' => Carbon::now(),
            ],
            [
                'user_id' => 3,
                'flight_type' => 'mission',
                'flight_id' => 3,
                'aircraft_id' => 5,
                'completion_status' => 'booked',
                'approval_status' => 'accepted',
                'handled_by' => 1,
                'start_time' => Carbon::now()->addDays(2)->setTime(11, 0),
                'end_time' => null,
                'created_at' => Carbon::now()->subHours(3),
            ],
        ]);
    }
}
