<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class WhiteListTokenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('white_tokens', function (Blueprint $table) {
            $table->longText('token');
            $table->increments('id');
            $table->timestamps();
            $table->string('club_id');
            $table->foreign('club_id')->references('id')->on('clubs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
