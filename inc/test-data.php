<?php
/* В php есть 2 типа массивов именованый (когда у каждого элемента массива есть ключ)
и не именнованый (без ключей). Массив $testData не именованый - полный аналог массива в JS. Если такой массив конвертировать в JSON передать в JS (например через ajax) и там сделать JSON.parse(testData) то получим обычный JS массив содержащий объекты
 [{'title': 'Item 1', 'description': 'Item 1 description', 'img...}, ...]
Каждый элемент массива $testData является именованым массивом так как каждый элемент массива имеет ключ (title, description, img ...). Если передать такой массив в JS то в при распаршивании JSON.parse такой массив превратится в JS в объект - поэтому
JSON.parse(testData) выдаст массив с объектами.
*/
$testData = array(
    array(
        'title' => 'UX/UI research',
        'author' => 'Coursria',
        'difficulty' => 'Легко',
        'background-image' => '',
        'link' => '',
        'checked' => false,
        'categories' => array('Design', 'Category 2')
    ),
    array(
        'title' => 'Книги Чихольда по типографике',
        'author' => 'Книга',
        'difficulty' => 'Легко',
        'background-image' => '../assets/img/card-1.jpg',
        'link' => '',
        'checked' => false,
        'categories' => array('Web design')
    ),
    array(
        'title' => 'Item 3',
        'description' => 'Item 3 description',
        'background-image' => '../assets/img/dog-2.jpg',
        'categories' => array('Category 10', 'Category 25', 'Category 3')
    ),
    array(
        'title' => 'Shape Up',
        'author' => 'Райан Зингер',
        'difficulty' => 'Легко',
        'background-image' => '../assets/img/card-2.jpg',
        'link' => '',
        'checked' => false,
        'categories' => array('Web design')
    ),
    array(
        'title' => 'Item 5',
        'description' => 'Item 5 description',
        'background-image' => '../assets/img/dog-4.jpg',
        'alt_img' => 'Image for Item 5',
        'categories' => array('Category 1', 'Category 2', 'Category 3', 'Category 1000')
    )
);
?>