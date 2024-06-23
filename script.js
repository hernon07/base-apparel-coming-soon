const btn = document.querySelector("button");
const input = document.querySelector("input");
const err = document.querySelector(".mail img");
const mail = document.querySelector(".mail");
btn.addEventListener(
  "click",
  function () {
    if (input.value === "") {
      err.classList.remove("hidden");
      input.classList.add("error");
      mail.insertAdjacentHTML(
        "afterend",
        '<p class="red">Please provide a valid email</p>'
      );
    }
  },
  { once: true }
);
