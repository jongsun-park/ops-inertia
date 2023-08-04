<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\LoomController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\YarnController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductionController;
use App\Http\Controllers\WashOptionController;

// Authentications - Template
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::middleware('auth')->group(function () {

    Route::get('/', function () {
        return redirect('products');
        // return Inertia::render('Home');
    })->name('home');

    // Product
    Route::get('/products', [ProductController::class, 'index'])->name('products'); // index
    Route::get('/products/{product}', [ProductController::class, 'show']); // show

    // Only Admin & Designer
    Route::middleware('can:create,App\Models\Product')->group(function () {
        Route::get('/products/create', [ProductController::class, 'create']); // create
        Route::post('/products', [ProductController::class, 'store']); // store

        Route::get('/products/{product}/edit', [ProductController::class, 'edit']); // edit
        Route::put('/products/{product}', [ProductController::class, 'update']); // update
        Route::delete('/products/{product}', [ProductController::class, 'destroy']); // delete
    });

    // Options
    // Only Admin
    Route::middleware('can:create,App\Models\User')->group(function () {
        // Yarns
        Route::get('/yarns', [YarnController::class, 'index'])->name('yarns');
        Route::get('/yarns/create', [YarnController::class, 'create']);
        Route::post('/yarns', [YarnController::class, 'store']);
        Route::get('/yarns/{yarn}/edit', [YarnController::class, 'edit']);
        Route::put('/yarns/{yarn}', [YarnController::class, 'update']); //
        Route::delete('/yarns/{yarn}', [YarnController::class, 'destroy']);

        // Loom
        Route::get('/looms', [LoomController::class, 'index'])->name('looms');
        Route::post('/looms', [LoomController::class, 'store']);
        Route::post('/looms/{loom}', [LoomController::class, 'update']);
        Route::delete('/looms/{loom}', [LoomController::class, 'destroy']);

        // Wash Options
        Route::get('/wash_options', [WashOptionController::class, 'index'])->name('wash_options');
        Route::get('/wash_options/create', [WashOptionController::class, 'create']);
        Route::post('/wash_options', [WashOptionController::class, 'store']);
        Route::get('/wash_options/{wash_option}/edit', [WashOptionController::class, 'edit']);
        Route::put('/wash_options/{wash_option}', [WashOptionController::class, 'update']); //
        Route::delete('/wash_options/{wash_option}', [WashOptionController::class, 'destroy']);
    });

    // Production
    Route::get('/productions', [ProductionController::class, 'index'])->name('productions');
    // Only Admin & Designer
    Route::middleware('can:create,App\Models\Production')->group(function () {
        Route::get('/productions/create/{product_id?}', [ProductionController::class, 'create']);
        Route::post('/productions', [ProductionController::class, 'store']);
        Route::get('/productions/{production}/edit', [ProductionController::class, 'edit']);
        Route::put('/productions/{production}', [ProductionController::class, 'update']);
        Route::delete('/productions/{production}', [ProductionController::class, 'destroy']);
    });

    // User - Only Admin
    Route::middleware('can:create,App\Models\User')->group(function () {
        Route::get('/users', [UserController::class, 'index'])->name('users');
        //->middleware('can:create,App\Models\User');
        //->can('create','App\Models\User');

        // Update User Role
        Route::put('/users/{user}/edit', [UserController::class, 'update']);

        // Delete User
        Route::delete('/users/{user}', [UserController::class, 'destroy']);
    });
});
