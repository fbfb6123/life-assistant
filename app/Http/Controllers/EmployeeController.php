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
    public function incomelist(Request $request){

        try {
  
          $year = $request->year;
          $month = $request->month;


          $data = Income::where('year', '=', "$year")
                         ->where('month', '=',"$month")
                         ->get();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }

    public function expenselist(Request $request){

        try {
          $year = $request->year;
          $month = $request->month;

          $data = Expense::where('year', '=', "$year")
                         ->where('month', '=',"$month")
                         ->get();

          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }

      public function incomecreate(Request $request){
        Log::debug($request);
                  
        try {
            $year = $request->year;

            $month = $request->month;


            $incomes = new Income();
            $incomes->text = $request->text;
            $incomes->amount = $request->amount;
            $incomes->date = $request->date;
            $incomes->year = $request->year;
            $incomes->month = $request->month;
            $incomes->save();
            
            $response['data'] = $incomes;
            $response['message'] = '成功';
            $response['success'] = true;

            
    
          } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
          }
          return $response;
      }

      public function expensecreate(Request $request){
          
        try {
  
            $year = $request->year;

            $month = $request->month;

            $incomes = new Expense();
            $incomes->text = $request->text;
            $incomes->amount = $request->amount;
            $incomes->date = $request->date;
            $incomes->year = $request->year;
            $incomes->month = $request->month;
            $incomes->save();

            $response['data'] = $request;
            $response['message'] = '成功';
            $response['success'] = true;
    
          } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
          }
          return $response;
      }

    public function incomedelete($id){
      
      try {
      $data = Income::where('id', "$id")->delete();
      $response['data'] = $request;
      $response['message'] = '成功';
      $response['success'] = true;
      } catch (\Exception $e) {
        $response['message'] = $e->getMessage();
        $response['success'] = false;
      }
      return $response;
    }

    public function expensedelete($id){
      
      try {
      $data = Expense::where('id', "$id")->delete();
      $response['data'] = $request;
      $response['message'] = '成功';
      $response['success'] = true;
      } catch (\Exception $e) {
        $response['message'] = $e->getMessage();
        $response['success'] = false;
      }
      return $response;
    }
}