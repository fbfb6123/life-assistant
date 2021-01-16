<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

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
  
            $insert[''] = $request['name'];
            $insert[''] = $request['email'];
            $insert[''] = $request['age'];

            Person::insert($insert);

            $response['message'] = '成功';
            $response['success'] = true;
    
          } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
          }
          return $response;
      }
}
