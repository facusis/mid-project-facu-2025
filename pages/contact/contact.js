function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validarTelefono(phoneValue) {
  const regex = /^(\+?\d{1,4}[-\s]?)?(\(?\d{1,4}\)?[-\s]?)?[\d\s\-]{6,}$/;
  return regex.test(phoneValue);
}

function bindSubmitForm() {
  const contactForm = document.querySelector("#contactForm");
  const inputEmail = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { target } = event;
    const emailValue = target.email.value.trim();

    if (validarEmail(emailValue)) {
      emailError.classList.add("hidden");
      emailError.classList.remove("visible");
      inputEmail.classList.remove("ivalid");

      // Mostrar la modal
      modal.classList.add("show");

      // Resetear el formulario después de enviar
      contactForm.reset();
    } else {
      emailError.classList.add("visible");
      emailError.classList.remove("hidden");
      inputEmail.classList.add("ivalid");
    }
  });
}

function bindModalEvents() {
  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector("#closeModal");
  const closeBtn = document.querySelector("#closeBtn");

  // Cerrar modal al hacer clic en la "X" o el botón "Cerrar"
  [closeModal, closeBtn].forEach((btn) =>
    btn.addEventListener("click", () => {
      modal.classList.remove("show");
    })
  );

  // Cerrar modal si el usuario hace clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
}

function bindPhoneValidation() {
  const inputPhone = document.querySelector("#tel");
  const telError = document.querySelector("#telError");

  inputPhone.addEventListener("blur", (event) => {
    const { target } = event;
    const phoneValue = target.value;

    if (validarTelefono(phoneValue)) {
      telError.classList.add("hidden");
      telError.classList.remove("visible");
      inputPhone.classList.remove("ivalid");
    } else {
      telError.classList.add("visible");
      telError.classList.remove("hidden");
      inputPhone.classList.add("ivalid");
    }
  });
}

function bindEvents() {
  bindSubmitForm();
  bindModalEvents();
  bindPhoneValidation();
}

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
});
