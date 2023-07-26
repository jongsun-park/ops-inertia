<?php

namespace App\Http\Controllers;

use App\Models\Loom;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LoomController extends Controller
{

    public function index()
    {
        return Inertia::render('Looms/Index', [
            'looms' => Loom::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        // return $request->input('name');

        $name = $request->input('name');

        $loom = Loom::find($name);

        // if your can find loom
        if ($loom) {
            return to_route('looms');
        }

        // if you can't find loom = new loom
        $attributes = $request->validate([
            'name' => ['required', 'unique:looms,name'],
        ]);

        Loom::create($attributes);

        return to_route('looms');
    }

    public function update(Loom $loom)
    {
        // return $loom;
        $attributes = request()->validate([
            'name' => ['required'],
        ]);

        $loom->update($attributes);

        return redirect()->route("looms", ['looms' => Loom::latest()->get()]);
    }

    public function destroy(Loom $loom)
    {
        $loom->delete();
        return redirect()->route("looms", ['looms' => Loom::latest()->get()]);
    }
}
