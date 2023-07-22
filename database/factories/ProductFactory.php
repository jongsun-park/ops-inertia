<?php

namespace Database\Factories;

use App\Models\Loom;
use App\Models\Yarn;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sku' => join("-", fake()->words(3)), // '021 056 7169 Blue P470',
            'tf_number' => fake()->word(), // 'TF6874',
            'desc' => join("-", fake()->words(3)), // 'Woods\' fine glass cloth BLUE',
            'warp_id' =>  Yarn::factory(), // 'NM26',
            'weft_1_id' => Yarn::factory(), // 'Y006',
            'weft_2_id' => Yarn::factory(), // 'Y083',
            'weft_3_id' => Yarn::factory(), // 'Y006',
            'weft_4_id' => Yarn::factory(), // 'Y006',
            'unit' => fake()->word(), // 'Units',
            'divs' => fake()->randomDigit(), // 2,
            'ppcm' => fake()->randomDigit(), // 20,
            'pprepeat' => fake()->randomDigit(), // 2000,
            'loom_id' => Loom::factory(), // '3:DB4',
            'cut_width' => fake()->randomDigit(), // '59',
            'cut_length' => fake()->randomDigit(), // '87',
            'finish_width' => fake()->randomDigit(), // '56',
            'finish_length' => fake()->randomDigit(), // '84',
            'label' => fake()->word(), // 'Customer\'s',
            'hem_type' => fake()->word(), // 'Plain',
            'hem_size' => fake()->randomDigit(), // 0.6,
            'corner' => fake()->word(), // 'Thru'
        ];
    }
}
