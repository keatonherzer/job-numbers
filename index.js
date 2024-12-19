<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Number App</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"></script>
</head>
<body>
  <div class="container">
    <h1>The current job number is:</h1>
    <p id="job-number">Loading...</p>
    <button id="new-job-btn">Get new job number</button>
  </div>
</body>
</html>
