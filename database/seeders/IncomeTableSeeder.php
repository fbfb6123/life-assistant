<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class IncomeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $income = ['仕事','お小遣い','アルバイト'];
        foreach ($income as $income) {
            DB::table('incomes')->insert([
                'text' => $income,
                'amount' => rand(1000,5000),
                'year' => 2021,
                'month' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                ]);
    }
}
}