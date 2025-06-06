// Bootstrap Form Validation from the contact-us.html
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
setTimeout(() => {
  document.getElementById("placeholder-card").style.display = "none";
  document.getElementById("real-card").style.display = "block";
}, 2000);
