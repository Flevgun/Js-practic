export function tabs() {
  const tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  const hideTabContent = (hide) => {
    for (let i = hide; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  };

  hideTabContent(1);

  const showTabContent = (show) => {
    if (tabContent[show].classList.contains("hide")) {
      tabContent[show].classList.remove("hide");
      tabContent[show].classList.add("show");
    }
  };

  info.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}
