<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class EmployeeController extends Controller
{
    public function list(){

        try {
  
          $data = Person::all();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }
}
