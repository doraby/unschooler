<?php
/* В php есть 2 типа массивов именованый (когда у каждого элемента массива есть ключ)
и не именнованый (без ключей). Массив $testData не именованый - полный аналог массива в JS. Если такой массив конвертировать в JSON передать в JS (например через ajax) и там сделать JSON.parse(testData) то получим обычный JS массив содержащий объекты
 [{'title': 'Item 1', 'description': 'Item 1 description', 'img...}, ...]

Каждый элемент массива $testData является именованым массивом так как каждый элемент массива имеет ключ (title, description, img ...). Если передать такой массив в JS то в при распаршивании JSON.parse такой массив превратится в JS в объект - поэтому
JSON.parse(testData) выдаст массив с объектами.
*/
$testData = array(
    array(
        'title' => 'Item 1',
        'description' => 'Item 1 description',
        'img' => '/img/dog-1.jpg',
        'alt_img' => 'Image for Item 1',
        'categories' => array('Category 1', 'Category 2', 'Category 3') // Не именованый массив. Как и в JS массив можно создавать через метод array() либо через []
    ),
    array(
        'title' => 'Item 2',
        'description' => 'Item 2 description',
        'categories' => ['Category 4', 'Category 8'] // Второй способ созданиф массива
    ),
    array(
        'title' => 'Item 3',
        'description' => 'Item 3 description',
        'background-image' => '/img/dog-2.jpg',
        'categories' => array('Category 10', 'Category 25', 'Category 3')
    ),
    array(
        'title' => 'Item 4',
        'description' => 'Item 4 description',
        'img' => '/img/dog-3.jpg',
        'alt_img' => 'Image for Item 4',
        'categories' => array('Category 3'),
        'selected' => true
    ),
    array(
        'title' => 'Item 5',
        'description' => 'Item 5 description',
        'img' => '/img/dog-4.jpg',
        'alt_img' => 'Image for Item 5',
        'categories' => array('Category 1', 'Category 2', 'Category 3', 'Category 1000')
    )
);
?>