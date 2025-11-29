// functions for opening and closing navbar in mobile and tablet mode
const navbar = document.getElementById('navbar');

function openSidebar() {
    navbar.classList.add('show')
}
function closeSidebar() {
    navbar.classList.remove('show')
}

// functions for opening and closing the info dialog on the contact page
function submitForm() {
    document.getElementById('infoDialog').showModal();
}
function closeModal(){
    document.getElementById('infoDialog').close()
}

// get year and insert it into footer
const d = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = d;