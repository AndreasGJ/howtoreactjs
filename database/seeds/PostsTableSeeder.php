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
