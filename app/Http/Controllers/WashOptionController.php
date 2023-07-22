<?php

namespace App\Http\Controllers;

use App\Models\WashOption;
use Inertia\Inertia;
use Illuminate\Http\Request;

class WashOptionController extends Controller
{
    protected $validateArray = [
        'name' =>  ['required'],
        'temp' => [],
        'detergt' => [],
        'softener' => [],
        'obas' => [],
        'starch' => [],
        'temble' => [],
        'other' => [],
    ];

    public function index()
    {
        return Inertia::render('WashOptions/Index', [
            'wash_options' => WashOption::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('WashOptions/Form');
    }

    public function store()
    {
        WashOption::create(request()->validate($this->validateArray));

        return to_route('wash_options');
    }

    public function edit(WashOption $wash_option)
    {

        return Inertia::render('WashOptions/Form', [
            'wash_option' => $wash_option,
        ]);
    }

    public function update(WashOption $wash_option)
    {
        $attributes = request()->validate($this->validateArray);

        $wash_option->update($attributes);

        return redirect("wash_options");
    }

    public function destroy(WashOption $wash_option)
    {
        $wash_option->delete();
        return redirect("wash_options");
    }
}
