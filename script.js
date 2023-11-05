const theBody = document.querySelector("body");
const openNav = document.querySelector(".menu-bar button");
const closeNav = document.querySelector(".close-nav button");
const Navbar = document.querySelector(".navbar");
const LoginBtn = document.querySelector(".login-btn");

// Hiding body scroll when mobile navigation menu opens
function bodyScroll() {
  if (Navbar.classList.contains("show")) {
    theBody.classList.add("hide-scroll");
  } else if (theBody.classList.contains("hide-scroll")) {
    theBody.classList.remove("hide-scroll");
  }
}

function showHide() {
  Navbar.classList.toggle("show");
  bodyScroll();
  if (Navbar.classList.contains("show")) {
    // Clone the login button and add it to the mobile navigation menu
    const loginClone = LoginBtn.cloneNode(true);
    Navbar.appendChild(loginClone);
  } else {
    // Remove the login button from the mobile navigation menu
    const loginItem = Navbar.querySelector(".login-btn");
    if (loginItem) {
      loginItem.remove();
    }
  }
}

openNav.onclick = showHide;
closeNav.onclick = showHide;

// price slider

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-feild input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

// for activing filter

document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  var currentPage = window.location.pathname.split("/").pop().split(".")[0];

  var filterItems = document.querySelectorAll(".filter-column li a");

  filterItems.forEach(function (item) {
    if (item.getAttribute("data-page") === currentPage) {
      item.parentElement.classList.add("active");
    }
  });
});

// script for adding Number

const sizeElements = document.querySelectorAll(".size-container a");

sizeElements.forEach((element) => {
  element.addEventListener("click", function () {
    sizeElements.forEach((el) => el.classList.remove("active"));

    element.classList.add("active");
  });
});
const decreaseButton = document.querySelector(".decrease-button");
const increaseButton = document.querySelector(".increase-button");
const quantityNo = document.querySelector(".quantityno");

let quantity = 1; // Initial quantity

decreaseButton.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityNo.textContent = quantity;
  }
});

increaseButton.addEventListener("click", () => {
  quantity++;
  quantityNo.textContent = quantity;
});

// image active
document.addEventListener("DOMContentLoaded", function () {
  var changeImage = document.getElementById("changeImage");

  if (changeImage) {
    changeImage.addEventListener("click", function () {
      var images = document.querySelectorAll(".cardProductdetail-image");
      images.forEach(function (image) {
        image.classList.remove("active");
      });

      var randomIndex = Math.floor(Math.random() * images.length);
      images[randomIndex].classList.add("active");

      var activeImage = document.querySelector(
        ".cardProductdetail-image.active"
      );
      var container = document.querySelector(".Productimagerow");
      var scrollLeft =
        activeImage.offsetLeft -
        container.offsetWidth / 2 +
        activeImage.offsetWidth / 2;
      container.scrollLeft = scrollLeft;
    });
  }

  var cardImages = document.querySelectorAll(".cardProductdetail-image");
  cardImages.forEach(function (image) {
    image.addEventListener("click", function () {
      cardImages.forEach(function (img) {
        img.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
