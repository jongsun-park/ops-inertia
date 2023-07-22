<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\User;
use App\Models\WashOption;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Production>
 */
class ProductionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => Product::factory(),
            'order_id' => fake()->word(),
            'customer' => fake()->word(),
            'urgency' => fake()->word(),
            'quantity' => fake()->randomDigit(),
            'total_length' => fake()->randomDigit(),
            'num_of_repeats' => fake()->randomDigit(),
            'user_id' => User::factory(),
            'note' => fake()->text(),
            'wash_option_id' => WashOption::factory(),
            'packing' => fake()->word(),
        ];
    }
}
