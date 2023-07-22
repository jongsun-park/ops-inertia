<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WashOption>
 */
class WashOptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => join("-", fake()->words(3)),
            'temp' => fake()->word(),
            'detergt' => fake()->word(),
            'softener' => fake()->word(),
            'obas' => fake()->word(),
            'starch' => fake()->word(),
            'temble' => fake()->word(),
            'other' => fake()->word(),
        ];
    }
}
