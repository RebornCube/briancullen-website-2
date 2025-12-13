// functions for opening and closing navbar in mobile and tablet mode
const navbar = document.getElementById('navbar');

function openSidebar() {
    navbar.classList.add('show');
}
function closeSidebar() {
    navbar.classList.remove('show');
}

// functions for opening and closing the info dialog on the contact page
function openModal() {
    document.getElementById('successDialog').showModal();
}
function closeModal() {
    document.getElementById('successDialog').close();
}

// get year and insert it into footer
const d = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = d;



// ==============================================================
// Keyboard shortcuts + modal
// An IIFE (Immediately Invoked Function Expression) 
// is a JavaScript function that runs as soon as it is defined.
// You don’t call it later — it calls itself immediately.
// ==============================================================

(function () {
  const modal = document.getElementById("shortcutModal");

  // If there is no shortcut modal on this page, do nothing
  if (!modal) return;

  function openShortcutModal() {
    modal.showModal();
  }

  // Helper: are we typing in a form / editable element?
  function isTypingInForm(event) {
    const target = event.target;
    const tag = target.tagName.toLowerCase();

    return (
      target.isContentEditable ||
      tag === "input" ||
      tag === "textarea" ||
      tag === "select"
    );
  }

  window.addEventListener("keydown", function (event) {
    const key = event.key;

    // Ignore shortcuts while typing in any form element (contact form etc.)
    if (isTypingInForm(event)) {
      return;
    }

    // ? opens the modal (Shift + / on most keyboards)
    if (key === "?") {
      event.preventDefault();
      openShortcutModal();
      return;
    }

    // h, a, e, p, m, c for navigation
    const lowerKey = key.toLowerCase();

    switch (lowerKey) {
      case "h":
        event.preventDefault();
        window.location.href = "index.html";
        break;
      case "a":
        event.preventDefault();
        window.location.href = "about.html";
        break;
      case "e":
        event.preventDefault();
        window.location.href = "experience.html";
        break;
      case "b":
        event.preventDefault();
        window.location.href = "blog.html";
        break;
      case "q":
        event.preventDefault();
        window.location.href = "mcq.html";
        break;
      case "c":
        event.preventDefault();
        window.location.href = "contact.html";
        break;
      default:
        // do nothing
        break;
    }
  });
})();
