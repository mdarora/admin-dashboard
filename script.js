const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-icon');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('main');


const toggleNav = () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
toggleBtn.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);


const navList = document.querySelectorAll('.navigation li');

function activateLink() {
    navList.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

navList.forEach((item) => {
    item.addEventListener('click', activateLink);
});