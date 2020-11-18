<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/css/styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap" rel="stylesheet">
  <link rel="stylesheet prefetch" href="https://cdn.rawgit.com/mfd/e7842774e037edf15919037594a79b2b/raw/665bdfc532094318449f1010323c84013d5af953/graphik.css">
  <title>Profession</title>
</head>
<body>
  <div class="wrapper">
    <?php include ("../blocks/vertical_menu.php");?>
    <div class="body">
      <?php include ("../blocks/header.php");?>
      <main class="courses-main">
        <div>
          <?php include ("../blocks/profession.php");?>  
          <p>Пройди курс профориентации и выбери своё направление</p>
        </div>
        <div class="card__list"></div>
      </main>
      <?php include ("../blocks/footer.php");?>
    </div>
  </div>
  <script src="../scripts/script.js"></script>
</body>