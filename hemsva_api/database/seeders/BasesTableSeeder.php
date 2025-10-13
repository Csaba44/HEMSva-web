<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BasesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('bases')->insert([
            [
                'name' => 'Budaörs',
                'icao_code' => 'LHBB',
            ],
            [
                'name' => 'Miskolc',
                'icao_code' => 'LHMC',
            ],
            [
                'name' => 'Debrecen',
                'icao_code' => 'LHDC',
            ],
        ]);
    }
}
