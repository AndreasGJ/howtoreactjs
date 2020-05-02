<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Page;

class PageDataResource extends JsonResource
{
    private $page;

    public function __construct(Page $page = null)
    {
        $this->page = $page;
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'page' => PageResource::make($this->page),
        ];
    }
}
