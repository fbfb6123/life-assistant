<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function list(){

        try {
  
          $data = Person::get();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }

      public function create(Request $request){
          
        try {
  
            $insert['name'] = $request['name'];
            $insert['email'] = $request['email'];
            $insert['age'] = $request['age'];

            Log::info($insert);

            DB::table('people')->insert($insert);

            $response['message'] = '成功';
            $response['success'] = true;

            // $people = new Person();
            // $people->name = $request->name;
            // $people->email = $request->email;
            // $people->age = $request->age;

            // $people->save();
    
          } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
          }
          return $response;
      }
}
