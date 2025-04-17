let clickShowSidebar = document.querySelector('.clickEvent');
let clickHideSidebar = document.querySelector('.hideSidebar');

let textArea = document.getElementById('text-box')
let btnBox = document.querySelector('#btn-submit')

clickShowSidebar.addEventListener('click', showSidebar)

clickHideSidebar.addEventListener('click', hideSidebar);


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

btnBox.addEventListener('click', postMessage)

function postMessage(event) {
    event.preventDefault();
    let textAreaValue = textArea.value

    if (textAreaValue) {
        alert('پیام شما برای تیم ما ارسال شد.')
    }
}

const swiper = new Swiper('.swiper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});