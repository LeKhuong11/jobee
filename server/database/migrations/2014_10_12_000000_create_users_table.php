<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->date('birthday')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->enum('gender', ['1', '0'])->nullable();
            $table->boolean('is_verify')->default(false);
            $table->unsignedBigInteger('has_job')->nullable();
            $table->unsignedBigInteger('first_job')->nullable();
            $table->date('first_job_time')->nullable();
            $table->string('avatar')->nullable();
            $table->text('bank_info')->nullable();
            $table->string('job_search_status')->nullable();
            $table->unsignedBigInteger('verified_by')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamps();

            // $table->foreign('has_job')->references('id')->on('jobs')->nullOnDelete();
            // $table->foreign('first_job')->references('id')->on('jobs')->nullOnDelete();
            // $table->foreign('verified_by')->references('id')->on('admins')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
