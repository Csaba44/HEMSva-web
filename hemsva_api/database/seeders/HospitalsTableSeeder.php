<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HospitalsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('hospitals')->insert([
            [
                'name' => 'Semmelweis klinika',
                'icao_code' => 'BP02',
            ],
            [
                'name' => 'Merényi Gusztáv kórház',
                'icao_code' => 'BP14',
            ],
            [
                'name' => 'Honvéd kórház',
                'icao_code' => 'BP15',
            ],
            [
                'name' => 'Szent Imre kórház',
                'icao_code' => 'BP16',
            ],
            [
                'name' => 'Uzsoki Utcai kórház',
                'icao_code' => 'BP17',
            ],
        ]);
    }
}
