<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            RolesTableSeeder::class,
            UserTableSeeder::class,
            UserRoleTableSeeder::class,
            BasesTableSeeder::class,
            HospitalsTableSeeder::class,
            AircraftTableSeeder::class,
            TransportFlightsTableSeeder::class,
            MissionsTableSeeder::class,
            RepositioningsTableSeeder::class,
            BookingsTableSeeder::class,
        ]);
    }
}
