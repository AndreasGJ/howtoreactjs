<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Http\Resources\PageResource;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $models = Page::where('status', 'publish')->get();

        return PageResource::collection($models);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $page = Page::where('slug', $request->slug)->first();

        if (!$page || $page->status != 'publish') {
            return abort(404, 'This page does not exist.');
        }

        return PageResource::make($page);
    }
}
