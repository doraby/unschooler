let CoursesCardData = [
    { id: 1,
      difficult: 'Легко',
      author: 'Coursera',
      title: 'UX/UI research',
      direction: ['Web-дизайнер'],
      checked: false,
      
    },
    { id: 2,
      difficult: 'Легко',
      author: 'Coursera',
      title: 'User testing',
      direction: ['Web-дизайнер', 'HTML&CSS'],
      checked: false,
      
    },
    { id: 3,
      difficult: 'Легко',
      author: 'Coursera',
      title: 'Работа с Figma',
      direction: ['Web-дизайнер', 'HTML&CSS', 'Frontend-Программист'],
      checked: false,
      
    },
    { id: 4,
      difficult: 'Легко',
      author: 'Книга',
      title: 'Книги Чихольда по типографике',
      direction: ['Web-дизайнер', 'HTML&CSS'],
      checked: false,
      imgURL: './../../img/imageChihold.png',
    },
    { id: 5,
      difficult: 'Легко',
      author: 'Книга Райана Зингера',
      title: 'Shape up',
      direction: ['Web-дизайнер', 'Frontend-Программист'],
      checked: false,
      imgURL: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
    },
  ];
export {CoursesCardData};

const chengeCheckCoursesCardData = (i) => {
  CoursesCardData[i-1].checked = !CoursesCardData[i].checked
}
export {chengeCheckCoursesCardData};