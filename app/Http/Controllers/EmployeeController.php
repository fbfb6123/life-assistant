<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function list(){

        try {
  
          $data = Employee::with("role")->get();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }
}
