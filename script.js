var imageList = ['827858.jpg', '827859.jpg', '8585761.jpg']; //массив картинок
var sliderImg = document.querySelector('.slider');

// создание из массива картинок маленькие изображения, добавление события клика по картинке
for (var i = 0; i < imageList.length; i++) {
    var img = document.createElement('img');
    img.src = 'small/' + imageList[i];
    img.classList.add('slider-small-img');
    img.addEventListener('click', bigImgView);
    sliderImg.appendChild(img);
}

var bigImgContainer = document.createElement('div'); //контейнер под большую картинку
var bigImg = document.createElement('img');
bigImg.classList.add('slider-big-img');
bigImg.src = 'big/' + imageList[0]; // по умолчанию выводится большая картинка первого элемента массива
bigImgContainer.appendChild(bigImg);
sliderImg.appendChild(bigImgContainer);
bigImg.onerror = function noImg(e) {
    alert('Изображение ' + e.target.src + ' отсутствует!');
    bigImg.src = 'big/noimg.jpg';
}

function bigImgView(e) {
    bigImg.src = e.target.src.replace('small', 'big');
}

