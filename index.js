const navbarElement = document.querySelector(".navbar");

const bottomContainerElement = document.querySelector(".bottom-container");

const lineOneElement = document.getElementById("line-one");
console.log("blue line::", lineOneElement.offsetTop);
console.log(
  "image wala::",
  bottomContainerElement.offsetTop - navbarElement.offsetHeight - 50
);

// console.log(bottomContainerElement.offsetTop);

// console.log(navbarElement.offsetHeight)

// console.log(navbarElement);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  //   362
  //   50px is text margin that is added in css
  if (
    window.scrollY >
    bottomContainerElement.offsetTop - navbarElement.offsetHeight - 50
  ) {
    navbarElement.classList.add("active");
    //   } else if (window.scrollY > lineOneElement.offsetHeight) {
    navbarElement.classList.remove("active");
    navbarElement.classList.add("activeblue");
  } else {
    navbarElement.classList.remove("active");
    navbarElement.classList.remove("activeblue");
  }
});
