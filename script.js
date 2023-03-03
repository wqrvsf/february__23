let title = document.querySelector('.holiday__title');
let info = document.querySelector('.holiday__info');
let btn = document.querySelector('.holiday__btn');
let block = document.querySelector('.holiday__block');
let feb = document.querySelector('.holiday__feb');

title.addEventListener('click', function () {
    feb.style.display = 'none';
    info.style.display = 'flex';
});

btn.addEventListener('click', function () {
    info.style.display = 'none';
    block.style.display = 'flex';

});