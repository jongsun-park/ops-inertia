<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Loom;
use App\Models\Product;
use App\Models\Production;
use App\Models\User;
use App\Models\WashOption;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::factory()->create(['role' => 'admin']);

        Production::factory(10)->create(['user_id' => $user->id]);
    }
}
