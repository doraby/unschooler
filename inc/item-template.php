<div class="card<?= $item['background-image'] ? ' card_bg' : ''; ?><?= $item['selected'] ? ' item_selected' : ''; ?>" <?= $item['background-image'] ? 'style="background-image: url('.$item['background-image'].');"' : '';?>>
    <div class="card__difficulty text_size_s">
        <?php echo $item['difficulty'];?>
    </div>
    <div class="card__author text_size_s">
        <?php echo $item['author'];?>
    </div>
    <h2 class="card__title">
        <?php echo $item['title'];?>
    </h2>
    <div class="card__footer">
        <ul class="card__categories text_size_s">
            <?php foreach ($item['categories'] as $category): ?>
            <li class="card__categories__item">
                <?= $category; ?>
            </li>
            <?php endforeach; ?>
        </ul>
        <div class="card__check">
        <input type="checkbox">
        </div>
    </div>
</div>