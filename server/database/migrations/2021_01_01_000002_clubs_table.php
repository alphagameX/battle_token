<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ClubsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clubs', function (Blueprint $table) {

            //primary
            $table->string('name')->unique();
            $table->string('username')->unique();
            $table->uuid('id')->unique()->primary();
            $table->string('email')->unique();
            $table->string('password', 60);
            $table->timestamps();

            // meta
            $table->float('cbt')->default(10.000);
            $table->integer('fan')->default(0);
            $table->integer('match_win')->default(0);
            $table->integer('match_lose')->default(0);; 

           

            // custom
            $table->string('background')->default('');
            $table->string('profil')->default('');
            $table->string('country')->default('france');
            $table->integer('sex')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('clubs');
    }
}
