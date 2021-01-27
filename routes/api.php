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



Route::get('/budget/getTodos', [BudgetController::class, 'getTodos']);

Route::post('/budget/postTodos', [BudgetController::class, 'postTodos']);
/*Route::match(['get', 'post'], '/csv/upload_regist', [CsvDownloadController::class, 'upload_regist']);*/



Route::post('/employee/income', [EmployeeController::class, 'incomelist']);

Route::post('/employee/expense', [EmployeeController::class, 'expenselist']);


Route::post('/employee/incomcreate', [EmployeeController::class, 'incomcreate']);

Route::post('/employee/expensecreate', [EmployeeController::class, 'expensecreate']);