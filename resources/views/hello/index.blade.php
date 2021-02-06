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
<body style="padding:10px;">

      <div>income</div>
      @foreach($data as $item)
      <tr>
            <th>{{$item->text}}</th>
      </tr>
      @endforeach      

      <script src="{{asset('/js/app.js')}}"></script>
</body>
</html>            
@endsection