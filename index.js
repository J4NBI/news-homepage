const btn = document.querySelector(".menue-btn");
const btnImage = document.querySelector(".menue-img");
const menueNav = document.querySelector(".menue-nav");
const aHref = document.querySelectorAll("a");

aHref.forEach((a) => {
  a.addEventListener("click", () => {
    const isOpen = btnImage.getAttribute("src") === "./images/icon-menu.svg";

    btnImage.setAttribute(
      "src",
      isOpen ? "./images/icon-menu-close.svg" : "./images/icon-menu.svg"
    );
    menueNav.classList.remove("swipe");
    menueNav.classList.add("swipeClose");
  });
});

btn.addEventListener("click", () => {
  const isOpen = btnImage.getAttribute("src") === "./images/icon-menu.svg";

  btnImage.setAttribute(
    "src",
    isOpen ? "./images/icon-menu-close.svg" : "./images/icon-menu.svg"
  );

  if (isOpen) {
    menueNav.classList.remove("hidden");
    menueNav.classList.remove("swipeClose");
    menueNav.classList.add("swipe");
  } else {
    menueNav.classList.remove("swipe");
    menueNav.classList.add("swipeClose");
  }
});
