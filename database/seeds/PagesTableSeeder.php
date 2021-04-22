<?php

use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\User;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin_user_id = User::first()->id;

        $pages = [
            [
                'title' => 'Welcome',
                'slug' => '/',
                'content' => [
                    ['type' => 'text', 'attributes' => [
                        'title' => 'Hejsa',
                        'content' => '<p>Hejsa igen her <b>Tester</b></p>',
                    ]]
                ],
                'user_id' => $admin_user_id,
                'status' => 'publish'
            ],[
                'title' => 'Blog',
                'slug' => '/blog',
                'content' => [
                    ['type' => 'text', 'attributes' => [
                        'title' => 'Hejsa',
                        'content' => '<p>Hejsa igen her <b>Tester</b></p>',
                    ]]
                ],
                'user_id' => $admin_user_id,
                'status' => 'publish'
            ],[
                'title' => 'Get started',
                'slug' => '/get-started',
                'content' => [
                    ['type' => 'text', 'attributes' => [
                        'title' => 'Hejsa',
                        'content' => '<p>Hejsa igen her <b>Tester</b></p>',
                    ]]
                ],
                'user_id' => $admin_user_id,
                'status' => 'publish'
            ],
        ];

        foreach ($pages as $page) {
            $item = Page::firstOrNew([
                'slug' => $page['slug']
            ]);

            $item->fill($page);
            $item->save();
        }
    }
}
