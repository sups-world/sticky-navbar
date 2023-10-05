const navbarElement = document.querySelector(".navbar");

const bottomContainerElement = document.querySelector(".bottom-container");
// console.log(bottomContainerElement.offsetTop);

// console.log(navbarElement.offsetHeight)

// console.log(navbarElement);

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  //   362
  //   50px is text margin that is added in css
  if (
    window.scrollY >
    bottomContainerElement.offsetTop - navbarElement.offsetHeight - 50
  ) {
    navbarElement.classList.add("active");
  } else {
    navbarElement.classList.remove("active");
  }
});
