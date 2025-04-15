let clickShowSidebar = document.querySelector('.clickEvent');
let clickHideSidebar = document.querySelector('.hideSidebar');

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