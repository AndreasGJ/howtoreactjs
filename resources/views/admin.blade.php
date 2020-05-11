<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="{{ mix('favicon.ico') }}" type="image/x-icon" />

        <link href="{{ mix('css/admin/app.css') }}" rel="stylesheet" />
        <link href="{{ mix('js/admin/app.js') }}" rel="script" />

        <title>{{ config('app.name') }} - Admin</title>
        <meta name="description" content="How to reactjs" />

        <!-- Styles -->
        <link href="{{ mix('css/admin/app.css') }}" rel="stylesheet" />
    </head>
    <body>
        <div id="app"></div>
        <script>window.__PREFILLED_DATA = JSON.parse('<?php
            echo json_encode(!empty($prefilled_data) ? $prefilled_data : []);
        ?>');</script>
        <script defer src="{{ mix('js/admin/app.js') }}"></script>
    </body>
</html>
