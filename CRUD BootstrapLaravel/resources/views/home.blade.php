<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .post-container {
      border: 3px solid black;
      margin-bottom: 20px;
      padding: 15px;
    }

    .form-container {
      border: 3px solid black;
      margin-bottom: 20px;
      padding: 15px;
    }
  </style>
</head>

<body>

  @auth
  <div class="container">
    <p>Congrats you are logged in.</p>
    <form action="/logout" method="POST">
      @csrf
      <button class="btn btn-danger">Log out</button>
    </form>
  </div>

  <div class="container form-container">
    <h2>Create a New Post</h2>
    <form action="/create-post" method="POST">
      @csrf
      <div class="form-group">
        <input type="text" class="form-control" name="title" placeholder="Post Title">
      </div>
      <div class="form-group">
        <textarea class="form-control" name="body" placeholder="Body content..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Save Post</button>
    </form>
  </div>

  <div class="container post-container">
    <h2>All Posts</h2>
    @foreach($posts as $post)
    <div class="post-item" style="background-color: #f8f9fa; padding: 10px; margin-bottom: 10px;">
      <h3>{{$post['title']}} by {{$post->user->name}}</h3>
      {{$post['body']}}
      <p><a href="/edit-post/{{$post->id}}" class="btn btn-secondary">Edit</a></p>
      <form action="/delete-post/{{$post->id}}" method="POST">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger">Delete</button>
      </form>
    </div>
    @endforeach
  </div>

  @else
  <div class="container form-container">
    <h2>Register</h2>
    <form action="/register" method="POST">
      @csrf
      <div class="form-group">
        <input name="name" type="text" class="form-control" placeholder="Name">
      </div>
      <div class="form-group">
        <input name="email" type="text" class="form-control" placeholder="Email">
      </div>
      <div class="form-group">
        <input name="password" type="password" class="form-control" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
  <div class="container form-container">
    <h2>Login</h2>
    <form action="/login" method="POST">
      @csrf
      <div class="form-group">
        <input name="loginname" type="text" class="form-control" placeholder="Name">
      </div>
      <div class="form-group">
        <input name="loginpassword" type="password" class="form-control" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Log in</button>
    </form>
  </div>
  @endauth

  <!-- Bootstrap JS and dependencies -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
