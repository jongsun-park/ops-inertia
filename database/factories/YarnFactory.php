<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Yarn>
 */
class YarnFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sku' => join("-", fake()->words(3)),
            'grade' => fake()->word(),
            'colour' => fake()->word(),
            'fibre' => fake()->word(),
            'supplier' => fake()->word(),
        ];
    }
}
