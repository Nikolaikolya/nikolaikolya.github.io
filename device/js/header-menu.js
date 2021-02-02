let buttonCatalog = document.querySelector(".catalog-button");
let catalogMenu = document.querySelector(".catalog-menu");
let searchButton = document.querySelector(".search-button");
let searchForm = document.querySelector(".search-form");

// Show header menu
buttonCatalog.addEventListener("mouseover", function (event) {
  if (event.target == buttonCatalog || event.target == catalogMenu) {
    catalogMenu.style.display = "flex";
  } else {
    catalogMenu.style.display = "block";
  }
});

buttonCatalog.addEventListener('keydown', function(event) {
  if (event.keyCode === 32 && event.target === buttonCatalog) {
    event.preventDefault();
    catalogMenu.style.display = "flex";
  }
});

buttonCatalog.addEventListener("mouseout", function (event) {
  catalogMenu.style.display = "none";
});

catalogMenu.addEventListener("mouseover", function (event) {
  catalogMenu.style.display = "flex";
});

catalogMenu.addEventListener("mouseout", function (event) {
  catalogMenu.style.display = "none";
});
// END Show header menu

// Show border search panel
searchButton.addEventListener(
  "focus",
  function() {
    searchForm.style.borderColor = "#000000";
    searchButton.style.opacity = "1";
  },
  true
);

searchButton.addEventListener(
  "blur",
  (event) => {
    searchForm.style.borderColor = "transparent";
    searchButton.style.opacity = "0";
  },
  true
);

searchForm.addEventListener(
  "focus",
  (event) => {
    searchForm.style.borderColor = "#000000";
    searchButton.style.opacity = "1";
  },
  true
);

searchForm.addEventListener(
  "blur",
  (event) => {
    searchForm.style.borderColor = "transparent";
    searchButton.style.opacity = "0";
  },
  true
);
// END show border search panel
