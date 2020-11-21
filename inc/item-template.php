<?php
//Тернарный оператор как в JS isTrue ? 'Is true' : 'Is false'
//$item['background-image'] ? 'style="bacлground-image: url('.$item['background-image'].');"' : '';
//С помощью точек склеиваем обычную строку с данными из $item в одну строку (в JS для этого испльзуется +)
//'style="bacлground-image: url('.$item['background-image'].');"'
?>
<div class="item<?= $item['background-image'] ? ' item_bg' : ''; ?><?= $item['selected'] ? ' item_selected' : ''; ?>" <?= $item['background-image'] ? 'style="background-image: url('.$item['background-image'].');"' : '';?>>
    <?php
//    Обращение к данным происходит по ключам как в JS мы можем обращаться к свойствам объекта obj['property'].
//    Важно!!! В JS мы можем обращаться к свойствам объекта через точку, но в php точка используется
//    для конкотенации строк (аналог сложения строк в JS 'Hello' + ' World!!' получим 'Hello World!!!',
//    в php это будет выглядеть 'Hello'.' World!!!'). Поэтому в php можно получит данные из именнового массива только через
//    квадратные скобки.
    ?>
    <div class="item__title">
        <?php echo $item['title']; // Для вывода тестовых данных используется оператор echo?>
    </div>
    <?php if ($item['description']): ?>
        <?= $item['description']; // Короткая запискь оператора echo (на некоторых серверах короткие записи оператров могут быть запрещены в настрокакх php) ?>
    <?php endif; ?>
    <?php if ($item['img']): ?>
    <div class="item__pictute">
        <img class="item__pictute__img" src="<?= $item['img']; ?>" alt="<?= $item['alt_img']; ?>"">
    </div>
    <?php endif; ?>
    <ul class="item__categories">
        <?php foreach ($item['categories'] as $category): ?>
        <li class="item__categories__item">
            <?= $category; ?>
        </li>
        <?php endforeach; ?>
    </ul>
</div>