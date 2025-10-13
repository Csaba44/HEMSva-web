<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserRoleTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('user_role')->insert([
            ['user_id' => 1, 'role_id' => 1], // Admin user is admin
            ['user_id' => 2, 'role_id' => 2], // Pilot One is pilot
            ['user_id' => 3, 'role_id' => 2], // Pilot Two is pilot
            ['user_id' => 1, 'role_id' => 2], // Admin also a pilot
        ]);
    }
}
