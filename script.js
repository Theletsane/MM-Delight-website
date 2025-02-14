let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle("active");
}
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('flipped');
    });
});
