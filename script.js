const links = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', changePage);
});

function changePage() {
    pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show the selected section
        const target = document.querySelector(this.getAttribute('href'));
        target.classList.add('active');
}

function sayHello() {
    alert("Hello! Welcome to my portfolio.");
}