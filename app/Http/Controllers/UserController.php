<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(){
        $search = request('q') ?? '';
        $page = request('page') ?? '';
        $fields = ['id', 'name', 'email', 'role'];

        if ($search) {
            return Inertia::render('User', [
                'users' => User::query()
                    ->when($search, function ($query, $search) {
                        $query->where('name', 'like', "%{$search}%");
                    })
                    ->paginate(15, $fields)
                    ->appends(['q' => $search]),
                'search' => $search,
                'page' => $page
            ]);
        }

        return Inertia::render('User', [
            'users' => User::paginate(15, $fields),
            'page' => $page,
            'can' => [
                'updateUser' => Auth::user()->can('create', User::class)
            ]
        ]);
    }

    public function update(User $user){
        $attributes = request()->validate([
            'role' => ['required'],
        ]);
        $user->update($attributes);
        return redirect()->route("users");
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route("users");
    }
}
