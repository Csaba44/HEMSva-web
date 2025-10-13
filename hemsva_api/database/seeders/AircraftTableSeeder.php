<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AircraftTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('aircraft')->insert([
            [
                'registration' => 'HA-HBL',
                'type_designator' => 'EC35',
                'base_id' => 1,
                'status' => 'active',
                'comment' => 'MEDIC 1 - Budapest',
            ],
            [
                'registration' => 'HA-HBO',
                'type_designator' => 'EC35',
                'base_id' => 2,
                'status' => 'active',
                'comment' => 'MEDIC 2',
            ],
            [
                'registration' => 'HA-HBM',
                'type_designator' => 'EC35',
                'base_id' => 3,
                'status' => 'active',
                'comment' => 'MEDIC 3',
            ],
            [
                'registration' => 'HA-HBI',
                'type_designator' => 'EC35',
                'base_id' => 3,
                'status' => 'maintenance',
                'comment' => 'Debrecen Training MEDIC 9',
            ],
            [
                'registration' => 'HA-HBJ',
                'type_designator' => 'EC35',
                'base_id' => 3,
                'status' => 'inactive',
                'comment' => 'Currently inactive.',
            ],
        ]);
    }
}