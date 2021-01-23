<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;
use App\Models\Income;
use App\Models\Expense;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function incomelist(){

        try {
  
          $data = Income::get();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }

    public function expenselist(){

        try {
  
          $data = Expense::get();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }

      public function incomcreate(Request $request){
          
        try {
  
            $insert['text'] = $request['text'];
            $insert['amount'] = $request['amount'];
            Log::info($insert);

            DB::table('incomes')->insert($insert);

            $response['data'] = $insert;
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

      public function expensecreate(Request $request){
          
        try {
  
            $insert['text'] = $request['text'];
            $insert['amount'] = $request['amount'];
            Log::info($insert);

            DB::table('expenses')->insert($insert);

            $response['data'] = $insert;
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
