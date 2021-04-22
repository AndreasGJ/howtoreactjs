<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin_user_id = User::first()->id;

        $posts = [
            [
                'title' => 'Best React project folder structure',
                'slug' => 'best-react-project-folder-structure',
                'content' => [
                    ['type' => 'text', 'attributes' => [
                        'title' => 'Hejsa',
                        'content' => '<p>Hejsa igen her <b>Tester</b></p>',
                    ]],
                    ['type' => 'code', 'attributes' => [
                        'code' => 'var x = 1;
console.log("x", x);',
                        'mode' => 'javascript',
                    ]],
                    ['type' => 'image', 'attributes' => [
                        'image' => 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                        'alt' => 'Man sitting at his Macbook and smiling',
                    ]],
                ],
                'user_id' => $admin_user_id,
                'status' => 'publish'
            ],[
                'title' => 'Keep your snippets cloud based',
                'slug' => 'keep-your-snippets-cloud-based',
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

        foreach ($posts as $post) {
            $item = Post::firstOrNew([
                'slug' => $post['slug']
            ]);

            $item->fill($post);
            $item->save();
        }
    }
}
