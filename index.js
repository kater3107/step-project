const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

let guitars_link = document.querySelector('.guitars-link');
let accessories_link = document.querySelector('.accessories-link');
let lessons_link = document.querySelector('.lessons-link');
let articles_link = document.querySelector('.articles-link');

let guitars = document.querySelector('.guitars');
let accessories = document.querySelector('.accessories');
let lessons = document.querySelector('.free-lesson');
let articles = document.querySelector('.articles');

guitars_link.addEventListener('click', function () {
    guitars.scrollIntoView({block: "center", behavior: "smooth"});
});
accessories_link.addEventListener('click', function () {
    accessories.scrollIntoView({block: "center", behavior: "smooth"});
});
lessons_link.addEventListener('click', function () {
    lessons.scrollIntoView({block: "center", behavior: "smooth"});
});
articles_link.addEventListener('click', function () {
    articles.scrollIntoView({block: "center", behavior: "smooth"});
});
