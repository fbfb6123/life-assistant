<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ExpenseTableSeeder extends Seeder
{
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            $income = ['収入','お小遣い','アルバイト'];
            foreach ($income as $income) {
                DB::table('expenses')->insert([
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
