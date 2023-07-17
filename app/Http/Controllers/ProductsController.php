<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Yarn;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
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
        'loom' => "",
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
            'yarns' => Yarn::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/Form', [
            'products' => Product::latest()->paginate(5),
            'yarns' => Yarn::latest()->get()
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
        // return $product->with(['warp', 'weft_1', 'weft_2', 'weft_3', 'weft_4'])->get();

        return Inertia::render('Products/Detail', [
            'product' => $product,
            'warp' => Yarn::find($product->warp_id),
            'weft1' => Yarn::find($product->weft_1_id),
            'weft2' => Yarn::find($product->weft_2_id),
            'weft3' => Yarn::find($product->weft_3_id),
            'weft4' => Yarn::find($product->weft_4_id),
        ]);
    }

    // Edit
    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', [
            'product' => $product,
            'yarns' => Yarn::all()
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
