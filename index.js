const contentEl = document.querySelector('.content');
const buttonEl = document.querySelector('.button');
const closeIconEl = document.querySelector('.close-icon');
const videoEl = document.querySelector('.videoEl');
const videoContentEl = document.querySelector('.video-content')

//При нажатии на кнопку открывает нам видео
buttonEl.addEventListener('click', () => {
    videoContentEl.classList.remove('active');
})

//При нажатии на крестик закрывает наше видео
//Так же при нажатии на крастик видео сохраняется на том моменте на котором мы его закрыли с помощью крестика
closeIconEl.addEventListener('click', () => {
    videoContentEl.classList.add('active');

   videoEl.pause();
})