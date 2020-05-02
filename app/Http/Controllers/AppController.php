<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Page;
use App\Http\Resources\PageDataResource;

class AppController extends Controller
{
    public function index(Request $request)
    {
        $page = Page::where([
            'slug' => $request->getRequestUri(),
            'status' => 'publish'
        ])->first();

        return view('app', [
            'prefilled_data' => new PageDataResource($page)
        ]);
    }
}
