const navList = document.querySelectorAll('.navigation li');

function activateLink() {
    navList.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

navList.forEach((item) => {
    item.addEventListener('click', activateLink);
});