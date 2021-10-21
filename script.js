const toggleBtn = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('main');

toggleBtn.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
});


const navList = document.querySelectorAll('.navigation li');

function activateLink() {
    navList.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

navList.forEach((item) => {
    item.addEventListener('click', activateLink);
});