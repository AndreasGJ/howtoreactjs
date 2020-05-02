<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    public static $admin_user_id;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Admin',
                'email' => 'andreasgadej@gmail.com',
                'password' => bcrypt('Hrm72jev!'),
                'active' => true,
            ]
        ];

        foreach ($users as $user) {
            $item = User::firstOrNew([
                'email' => $user['email']
            ]);

            if (!$item->email_verified_at) {
                $item->email_verified_at = Carbon::now();
            }
            $item->fill($user);
            $item->save();

            if (!self::$admin_user_id) {
                self::$admin_user_id = $item->id;
            }
        }
    }
}
