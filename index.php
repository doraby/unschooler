<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
<?php require('inc/test-data.php'); ?>
<div class="wrapper">
    <?php
    /*Перебор всех элементов массива. Работает аналогично как в JS Array.forEach(function(item){console.log(item);})
    В каждую итерацию массива текущий элемент массива попадает как $item
    В php для задания переменных нет ключевого слова как JS. Есть одно обязательное условие все переменный обязательно должны
    начинаться с $ */
    foreach ($testData as $item): ?>
    <?php
//    При каждой итерации мы подключаем шаблон для каждого $item отдельно и в шаблон пападает только один текущий элемент ($item)
        require('inc/item-template.php');
        ?>
    <?php endforeach; ?>
</div>
</body>
</html>