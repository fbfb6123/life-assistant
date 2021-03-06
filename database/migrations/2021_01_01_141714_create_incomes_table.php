<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('incomes', function (Blueprint $table) {
            $table->id();
            $table->string('text')->comment('名前');
            $table->integer('amount')->nullable()->comment('金額');
            $table->string('type')->nullable()->comment('タイプ');
            $table->string('date')->nullable()->comment('日時');
            $table->unsignedInteger('year')->nullable()->comment('ログイン・年');
            $table->unsignedInteger('month')->nullable()->comment('ログイン・月');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('incomes');
    }
}
