<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PersonTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $person = ['田中太郎','山田太郎','佐藤太郎'];
        foreach ($person as $person) {
            DB::table('people')->insert([
                'name' => $person,
                'email' => Str::random(10).'@gmail.com',
                'age' => rand(10,50),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                ]);
    }
}
}
