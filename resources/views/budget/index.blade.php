@extends('layout')


@section('content')
<!doctype html>
<html lang="ja">
<head>
<title>Index</title>
<link href="{{ mix('css/app.css') }}"
      rel="stylesheet" type="text/css">
<meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body class=container>
  <div class="header"></div>
  <div id="mycomponent"></div>

<script src="{{asset('/js/app.js')}}"></script>
</body>
</html>            
@endsection