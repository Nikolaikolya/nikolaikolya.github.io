// Global Var
let popupWrite = document.querySelector(".popup__write");
let popupMap = document.querySelector(".popup__map");
let popupWriteClose = document.querySelector(".form-write .popup-button");
let popupWriteShow = document.querySelector(".contacts .button");
let popupMapShow = document.querySelector(".contacts__link");
let inputName = document.querySelector(".input-name");
let formWrite = document.querySelector(".form-write");
let poupMapClose = document.querySelector(".popup__map .popup-button");
let searchInput = document.querySelector(".search-input");
let buttonSliderIndex = document.querySelectorAll(".slider-control__item button");
let sliderList = document.querySelector(".slider-list");
let sliderListItem = document.querySelectorAll(".slider-list > li");
let servicesButton = document.querySelectorAll(".services-button button");
let servicesSliderItem = document.querySelectorAll(".services-list__item");
let contactsLink = document.querySelector(".contacts__link");
let contactsButtonWrite = document.querySelector(".contacts .button--big");


function toggleClassButton(array, elementClass) {
  array.forEach(function (element) {
    element.addEventListener("click", function () {
      if (!element.classList.contains(elementClass)) {
        for (let i = 0; i <= array.length - 1; i++) {
          array[i].classList.remove(elementClass);
        }
        element.classList.add(elementClass);
      }
    });
  });
}

function toggleSliderServices(element, className) {
  servicesSliderItem.forEach((elem) => {
    elem.classList.remove(className);
  });

  element.classList.add(className);
}

function toggleClass(array, element, className){
  for(let i = 0; i <= array.length - 1; i++) {
    array[i].classList.remove(className);
  }
  element.classList.add(className);
}

// Show slider for block services
for (let i = 0; i <= servicesSliderItem.length - 1; i++) {
  toggleClassButton(servicesButton, "button--current");
  servicesButton[i].addEventListener("click", function () {
    servicesButton[i].classList.add("button--current");
    if (servicesButton[i].classList.contains("button--current")) {
      toggleSliderServices(
        servicesSliderItem[i],
        "services-list__item--current"
      );
    }
  });
}

// End show slider for block services slider-none slider-list__item active
buttonSliderIndex.forEach(function (element, index) {
  element.addEventListener('click', function() {
    toggleClass(buttonSliderIndex, element, 'active');
    toggleClass(sliderListItem, sliderListItem[index], 'slider-list__item');
    sliderListItem[index].classList.add('slider-list__item');
  });
});

// Popup close and open
popupWriteClose.addEventListener("click", function (event) {
  event.preventDefault();
  popupWrite.style.display = "none";
});

popupWriteShow.addEventListener("click", function (event) {
  event.preventDefault();
  popupWrite.style.display = "block";
  inputName.focus();
});

contactsLink.addEventListener("focus", function (event) {
  contactsLink.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
      popupMap.style.display = "block";
    }
  });
});

contactsButtonWrite.addEventListener("focus", function (event) {
  contactsButtonWrite.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
      popupWrite.style.display = "block";
      inputName.focus();
    }
  });
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popupWrite.style.display === "block") {
      popupWrite.style.display = "none";
    } else if (popupMap.style.display === "block") {
      popupMap.style.display = "none";
    }
  }
});

popupMapShow.addEventListener("click", function () {
  popupMap.style.display = "block";
});

poupMapClose.addEventListener("click", function () {
  popupMap.style.display = "none";
});
// End popup
