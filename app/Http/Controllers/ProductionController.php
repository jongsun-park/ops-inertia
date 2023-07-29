<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Production;
use App\Models\WashOption;
use Illuminate\Http\Request;

class ProductionController extends Controller
{
    protected $validateArray = [
        'product_id' => ['exists:products,id'],
        'order_id' => "",
        'customer' => "required",
        'urgency' => "",
        'quantity' => "",
        'total_length' => "",
        'num_of_repeats' => "",
        'user_id' => ['exists:users,id'],
        'note' => "",
        'wash_option_id' => ['exists:wash_options,id'],
        'packing' => "",
    ];

    public function index()
    {
        $productions = Production::latest()->with(['author', 'product', 'washOption'])->paginate(5);

        // return Production::latest()->paginate(5);
        return Inertia::render('Productions/Index', [
            'productions' => $productions
        ]);
    }

    public function create($product_id = null)
    {
        return Inertia::render('Productions/Form', [
            'wash_opts' => WashOption::latest()->get(),
            'user' => User::find(1), // TODO change to current user
            'users' => User::latest()->get(),
            'products' => Product::latest()->get(),
            'product_id' => $product_id
        ]);
    }

    public function store(Request $request)
    {
        Production::create($request->validate($this->validateArray));

        return to_route('productions');
    }

    public function edit(Production $production)
    {
        return Inertia::render('Productions/Form', [
            'production' => $production,
            'wash_opts' => WashOption::latest()->get(),
            'user' => User::find(1), // TODO change to current user
            'users' => User::latest()->get(),
            'products' => Product::latest()->get(),
        ]);
    }

    public function update(Production $production)
    {
        $attributes = request()->validate($this->validateArray);

        $production->update($attributes);

        return redirect("productions");
    }


    public function destroy(Production $production)
    {
        $production->delete();
        return redirect("productions");
    }
}
