<?php

namespace App\Http\Controllers;

use App\Models\Yarn;
use Inertia\Inertia;
use Illuminate\Http\Request;

class YarnController extends Controller
{

    protected $validateArray = [
        'sku' => ['required'],
        'grade' => "",
        'colour' => "",
        'material' => "",
        'supplier' => "",
    ];

    public function index()
    {
        // return Yarn::latest()->paginate(5);
        return Inertia::render('Yarns/Index', [
            'yarns' => Yarn::latest()->paginate(5),
        ]);
    }

    public function create()
    {
        return Inertia::render('Yarns/Form');
    }

    public function store(Request $request)
    {
        Yarn::create($request->validate($this->validateArray));

        return to_route('yarns');
    }

    public function edit(Yarn $yarn)
    {
        return Inertia::render('Yarns/Form', [
            'yarn' => $yarn,
        ]);
    }

    public function update(Yarn $yarn)
    {
        $attributes = request()->validate($this->validateArray);

        $yarn->update($attributes);

        return redirect("yarns");
    }


    public function destroy(Yarn $yarn)
    {
        $yarn->delete();
        return redirect("yarns");
    }
}
