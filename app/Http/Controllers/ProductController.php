<?php

namespace App\Http\Controllers;

use App\Models\Loom;
use App\Models\User;
use App\Models\Yarn;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    protected $validateArray = [
        'sku' => ['required'],
        'tf_number' => ['required'],
        'desc' => '',
        'warp_id' => ['exists:yarns,id'],
        'weft_1_id' => ['exists:yarns,id'],
        'weft_2_id' => ['exists:yarns,id'],
        'weft_3_id' => ['exists:yarns,id'],
        'weft_4_id' => ['exists:yarns,id'],
        'unit' => "",
        'divs' => "",
        'ppcm' => "",
        'pprepeat' => "",
        'loom_id' =>  ['exists:looms,id'],
        'cut_width' => "",
        'cut_length' => "",
        'finish_width' => "",
        'finish_length' => "",
        'label' => "",
        'hem_type' => "",
        'hem_size' => "",
        'corner' => "",
    ];

    // Products - index & create
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::latest()->paginate(5),
            'can' => [
                'update' => Auth::user()->can('create', Product::class)
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/Form', [
            'yarns' => Yarn::latest()->get(),
            'looms' => Loom::latest()->get(),
        ]);
    }

    // Save Product - store
    public function store(Request $request)
    {
        Product::create($request->validate($this->validateArray));

        return to_route('products');
    }

    // Show Product - show
    public function show(Product $product)
    {
        return Inertia::render('Products/Show', [
            'product' => $product,
            'warp' => $product->warp,
            'weft1' => $product->weft_1,
            'weft2' => $product->weft_2,
            'weft3' => $product->weft_3,
            'weft4' => $product->weft_4,
            'loom' => $product->loom,
            'productions' => $product->productions
        ]);
    }

    // Edit
    public function edit(Product $product)
    {
        return Inertia::render('Products/Form', [
            'product' => $product,
            'yarns' => Yarn::latest()->get(),
            'looms' => Loom::latest()->get(),
        ]);
    }

    // Update
    public function update(Product $product)
    {
        $attributes = request()->validate($this->validateArray);

        $product->update($attributes);

        return redirect("products/$product->id");
    }

    // Delete Product - destroy
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect("products");
    }
}
