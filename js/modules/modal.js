export function modal() {
  const more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close"),
    descriptionBtn = document.getElementsByClassName("description-btn");

  more.addEventListener("click", () => {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });
  close.addEventListener("click", () => {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

  for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener("click", () => {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    });
  }
}
