document.addEventListener('DOMContentLoaded', () => {
    const men = document.getElementById("men")  ;


    function openPage(page) {
        window.location.href = page;
    }
    men.onclick = () => {
        openPage('men.html');
    }
});