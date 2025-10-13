<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => Hash::make('password'),
                'created_at' => Carbon::now(),
            ],
            [
                'name' => 'Pilot One',
                'email' => 'pilot1@example.com',
                'password' => Hash::make('password'),
                'created_at' => Carbon::now(),
            ],
            [
                'name' => 'Pilot Two',
                'email' => 'pilot2@example.com',
                'password' => Hash::make('password'),
                'created_at' => Carbon::now(),
            ],
        ]);
    }
}
