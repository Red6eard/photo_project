
//выбираем элементы на странице
const photo = document.getElementById("photo");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//сщздаем массив с сылками на фотки

const photoArr = ['image/Nik1Avers.jpg','image/Nik1Revers.jpg','image/Nik2Avers.jpg','image/Nik2Revers.jpg','image/masAvers.jpg','image/masRevers.jpg','image/GrivAvers.jpg','image/GrivRevers.jpg'];

//функция прокрутки слайдера вперед
let count = 0;
function getNext() {
    count += 1;
    if (count > photoArr.length - 1) {
        count = 0;
    }
    return photo.src = photoArr[count];
};

//функция прокрутки слайдера назад
function getPrev() {
    count -=1;
    if (count < 0) {
        count = photoArr.length -1
    }
    return photo.src = photoArr[count];
};


//прос/*  */лушиватель событий на кнопку вперед

next.addEventListener("click",getNext);

//на кнопку назад

prev.addEventListener("click",getPrev);