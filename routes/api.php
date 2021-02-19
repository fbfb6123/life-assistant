<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BudgetController;
use App\Http\Controllers\EmployeeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::match(['get', 'post'],'/employee/income', [EmployeeController::class, 'incomelist']);

Route::match(['get', 'post'],'/employee/expense', [EmployeeController::class, 'expenselist']);


Route::match(['get', 'post'],'/employee/incomecreate', [EmployeeController::class, 'incomecreate']);

Route::match(['get', 'post'],'/employee/expensecreate', [EmployeeController::class, 'expensecreate']);

Route::delete('/employee/incomedelete/{id}', [EmployeeController::class, 'incomedelete']);

Route::delete('/employee/expensedelete/{id}', [EmployeeController::class, 'expensedelete']);