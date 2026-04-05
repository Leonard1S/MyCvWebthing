<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('personal_data', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('role');
            $table->text('description');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('github')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('hero_image')->nullable();
            $table->string('quote')->nullable();
            $table->text('mission')->nullable();
            $table->text('vision')->nullable();
            $table->text('goals')->nullable();
            $table->string('school')->nullable();
            $table->string('grade')->nullable();
            $table->timestamps();
        });

        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('company');
            $table->string('position');
            $table->string('duration');
            $table->text('description');
            $table->timestamps();
        });

        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category');
            $table->integer('percentage')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('personal_data');
        Schema::dropIfExists('experiences');
        Schema::dropIfExists('skills');
    }
};
