
//выбираем элементы на странице
const photo = document.getElementById("photo");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//сщздаем массив с сылками на фотки

const photoArr = ['image/Nik1Avers.jpg','image/Nik1Revers.jpg','image/Nik2Avers.jpg','image/Nik2Revers.jpg'];

//функция прокрутки слайдера вперед
let count = 0;
function getNext() {
    count += 1;
    if (count > photoArr.length - 1) {
        count = 0;
    }
    return count;
};

//функция прокрутки слайдера назад
function getPrev() {
    count -=1;
    if (count < 0) {
        count = photoArr.length -1
    }
    return count;
};

console.log(count);