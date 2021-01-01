<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use App\Models\Spending;
use App\Models\Income;

class BudgetController extends Controller
{
    public function index()
    {
        $data = [
            'msg' =>'これはReactのアプリケーションです'
        ];

        return view('budget.index', $data);
    }

    public function json($id = -1)
    {
        Log::info($id);
        if($id == -1)
        {
            return Person::get()->toJson();
        } else {
            return Person::find($id)->toJson();
        }
    }
}
