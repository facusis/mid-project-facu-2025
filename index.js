document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contactForm");
  const inputEmail = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector("#closeModal");
  const closeBtn = document.querySelector("#closeBtn");

  function validarEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
  }

  contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const { target } = event;
      const emailValue = target.email.value.trim();

      if (validarEmail(emailValue)) {
          emailError.classList.add("hidden");
          emailError.classList.remove("visible");

          // Mostrar la modal
          modal.classList.add("show");

          // Resetear el formulario después de enviar
          contactForm.reset();
      } else {
          emailError.classList.add("visible");
          emailError.classList.remove("hidden");
      }
  });

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
});
