<!DOCTYPE html>
﻿<html>
<head>
  <meta charset="utf-8">
  <title>位置情報取得</title>
</head>
<body>
  <div id="location"></div>
  <script>
  if (window.Worker) {
let worker = new Worker("finloca.js");
worker.postMessage();


}</script>
</body>
</html>
