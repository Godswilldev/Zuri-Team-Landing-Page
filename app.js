////////////////////////////////////////////////////////////////
///inserting the html of the navigation through javascript
//////////////////////////////////////////////////////////////
const navigation = document.querySelector(".navigation");
// (function () {
//   const html = ` <nav class="nav">
//   <div class="nav__logo">
//     <img
//       src="assets/shared/desktop/logo-dark.png"
//       alt="nav logo"
//       class="nav__logo--img"
//     />
//   </div>
//   <ul class="nav__links">
//     <li><a href="#" class="nav__item">Our Company</a></li>
//     <li><a href="#" class="nav__item">Locations</a></li>
//     <li><a href="#" class="nav__item">Contact</a></li>
//   </ul>
//   <div class="nav__hamburger">
//     <span class="line"></span>
//     <span class="line"></span>
//     <span class="line"></span>
//   </div>
// </nav>`;

//   navigation.insertAdjacentHTML("beforeend", html);
// })();

/////////////////////////////////////////////////////
///////////////////////// Button ripple effect
////////////////////////////////////////////////////

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xInside = x - btnLeft;
    const yInside = y - btnTop;

    const span = document.createElement("span");
    span.classList.add("circle");
    span.style.top = yInside + "px";
    span.style.left = xInside + "px";

    this.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 500);
  });
});

////////////////////////////////////////////////////////////////
//////////////////////////// Navigation
////////////////////////////////////////////////////////////////
const nav = document.querySelector(".nav");
const nav__hamburger = document.querySelector(".nav__hamburger");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
nav__hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  nav.classList.remove("active");
});

/////////////////////////////////////////////////////
///sticky nav using the intersection observer api
////////////////////////////////////////////////////////
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("nav__sticky");
  } else {
    nav.classList.remove("nav__sticky");
  }
};

const navObserver = new IntersectionObserver(stickyNav, {
  threshold: 0,
  root: null,
  rootMargin: `${navHeight + 50}px`,
});

navObserver.observe(navigation);

//////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
