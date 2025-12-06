// functions for opening and closing navbar in mobile and tablet mode
const navbar = document.getElementById('navbar');

function openSidebar() {
    navbar.classList.add('show');
}
function closeSidebar() {
    navbar.classList.remove('show');
}

// functions for opening and closing the info dialog on the contact page
function submitForm() {
    document.getElementById('infoDialog').showModal();
}
function closeModal() {
    document.getElementById('infoDialog').close();
}

// get year and insert it into footer
const d = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = d;

// (Optional) contact form completion check
function checkFormCompletion() {
    // NOTE: getElementsByName returns a NodeList; pick the first element
    const nameInput = document.getElementsByName('name')[0];
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submitBtn');

    if (!nameInput || !emailInput || !messageInput || !submitButton) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && message) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

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
      case "p":
        event.preventDefault();
        window.location.href = "projects.html";
        break;
      case "m":
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
