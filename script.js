const navbar = document.getElementById('navbar');

function openSidebar() {
    navbar.classList.add('show')
}
function closeSidebar() {
    navbar.classList.remove('show')
}
function submitForm() {
    document.getElementById('popupBox').classList.toggle('hidden');
}

const d = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = d;
