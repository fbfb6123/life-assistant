<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use App\Models\Person;


class HelloController extends Controller
{
    public function index()
    {
        $person = Person::all();

        $data = [
            'msg' =>'これはReactのアプリケーションです',
            'person' => $person,
        ];

        return view('hello.index', $data);
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
