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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('sku'); // 021 056 7169 Blue P470
            $table->string('tf_number')->nullable(); // TF6874
            $table->string('desc')->nullable(); // Woods' fine glass cloth BLUE

            $table->foreignId('warp_id')->nullable()->constrained(table: 'yarns',  indexName: 'products_warp_id'); // NM26
            $table->foreignId('weft_1_id')->nullable()->constrained(table: 'yarns', indexName: 'products_weft_1_id'); // Y006
            $table->foreignId('weft_2_id')->nullable()->constrained(table: 'yarns', indexName: 'products_weft_2_id'); // Y083
            $table->foreignId('weft_3_id')->nullable()->constrained(table: 'yarns', indexName: 'products_weft_3_id'); // Y006
            $table->foreignId('weft_4_id')->nullable()->constrained(table: 'yarns', indexName: 'products_weft_4_id'); // Y006

            $table->string('unit')->nullable(); //
            $table->integer('divs')->nullable(); // 2
            $table->integer('ppcm')->nullable(); // 20
            $table->integer('pprepeat')->nullable(); // 2000
            $table->string('loom')->nullable(); // foreign: loom // 3:DB4
            $table->integer('cut_width')->nullable(); // 59 // cm
            $table->integer('cut_length')->nullable(); // 87 // cm
            $table->integer('finish_width')->nullable(); // 56 // cm
            $table->integer('finish_length')->nullable(); // 84 // cm
            $table->string('label')->nullable(); // foreign: label
            $table->string('hem_type')->nullable(); // foreign: hem // Plain
            $table->double('hem_size')->nullable(); // 0.6 // cm
            $table->string('corner')->nullable(); // forgien: corner // Thru
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
