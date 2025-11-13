<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RepositioningsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('repositionings')->insert([
            [
                'from_base_id' => 1, // Budaörs
                'to_base_id' => 2, // Miskolc
                'description' => 'Légi jármű áthelyezés karbantartás miatt',
                'reward_points' => 800,
            ],
            [
                'from_base_id' => 2, // Miskolc
                'to_base_id' => 3, // Debrecen
                'description' => 'Szezonális báziscsere a Kelet-Magyarországi régióban',
                'reward_points' => 450,
            ],
            [
                'from_base_id' => 3, // Debrecen
                'to_base_id' => 1, // Budaörs
                'description' => 'Visszatérés a főbázisra karbantartás után',
                'reward_points' => 650,
            ],
        ]);
    }
}
