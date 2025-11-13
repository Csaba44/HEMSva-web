<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransportFlightsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('transport_flights')->insert([
            [
                'base_id' => 1, // Budaörs
                'from_hospital_id' => 1, // Semmelweis klinika
                'to_hospital_id' => 2, // Merényi Gusztáv kórház
                'description' => 'Betegszállítás a Semmelweis klinikáról a Merényi Gusztáv kórházba',
                'reward_points' => 450,
            ],
            [
                'base_id' => 1, // Budaörs
                'from_hospital_id' => 3, // Honvéd kórház
                'to_hospital_id' => 4, // Szent Imre kórház
                'description' => 'Sürgősségi szervszállítás a Honvéd kórházból a Szent Imre kórházba',
                'reward_points' => 380,
            ],
            [
                'base_id' => 2, // Miskolc
                'from_hospital_id' => 1, // Semmelweis klinika
                'to_hospital_id' => 5, // Uzsoki Utcai kórház
                'description' => 'Orvosi csapat szállítása Budapestre',
                'reward_points' => 1200,
            ],
        ]);
    }
}
