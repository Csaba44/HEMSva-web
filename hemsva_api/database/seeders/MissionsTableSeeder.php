<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MissionsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('missions')->insert([
            [
                'base_id' => 1, // Budaörs
                'latitude' => 47.4979,
                'longitude' => 19.0402,
                'to_hospital_id' => 1, // Semmelweis klinika
                'description' => 'Sürgősségi mentés Budapest belvárosában',
                'reward_points' => 850,
            ],
            [
                'base_id' => 1, // Budaörs
                'latitude' => 47.5316,
                'longitude' => 19.0511,
                'to_hospital_id' => 3, // Honvéd kórház
                'description' => 'Baleset helyszíni mentés a Róbert Károly körúton',
                'reward_points' => 720,
            ],
            [
                'base_id' => 2, // Miskolc
                'latitude' => 48.1036,
                'longitude' => 20.7914,
                'to_hospital_id' => 2, // Merényi Gusztáv kórház
                'description' => 'Hegyi mentés a Bükk-vidéken',
                'reward_points' => 1500,
            ],
            [
                'base_id' => 3, // Debrecen
                'latitude' => 47.5310,
                'longitude' => 21.6393,
                'to_hospital_id' => 4, // Szent Imre kórház
                'description' => 'Mezőgazdasági baleset mentése a Hortobágyon',
                'reward_points' => 1100,
            ],
        ]);
    }
}
