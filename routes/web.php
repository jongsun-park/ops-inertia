<?php

use App\Http\Controllers\LoomController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\YarnController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__ . '/auth.php';

Route::get('/', function () {
    return redirect('products');
    // return Inertia::render('Home');
})->name('home');

// Product
Route::get('/products', [ProductsController::class, 'index'])->name('products'); // index
Route::get('/products/create', [ProductsController::class, 'create']); // create
Route::post('/products', [ProductsController::class, 'store']); // store
Route::get('/products/{product}', [ProductsController::class, 'show']); // show
Route::get('/products/{product}/edit', [ProductsController::class, 'edit']); // edit
Route::put('/products/{product}', [ProductsController::class, 'update']); // update
Route::delete('/products/{product}', [ProductsController::class, 'destroy']); // delete

// Yarn
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


// Production
