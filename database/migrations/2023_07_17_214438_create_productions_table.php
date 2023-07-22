<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->nullable()->constrained();
            $table->text('order_id')->nullable();
            $table->text('customer')->nullable();
            $table->text('urgency')->nullable();
            $table->text('quantity')->nullable();
            $table->text('total_length')->nullable();
            $table->text('num_of_repeats')->nullable();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->text('note')->nullable();
            $table->foreignId('wash_option_id')->nullable()->constrained(table: 'wash_options');
            $table->text('packing')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productions');
    }
};
