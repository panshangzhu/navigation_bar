const burger = document.getElementById("burger");
const rightMenu = document.getElementById("nav");
const clickUl = document.getElementById("secondUl");
const list = document.querySelectorAll("header nav ul.smallScreenUl li.uplist");
const lanEng = document.getElementById("eng");
const lanChn = document.getElementById("chn");
const lanEngS = document.getElementById("engS");
const lanChnS = document.getElementById("chnS");

const smallversion = () => {
  burger.addEventListener("click", () => {
    list.forEach(li => {
      li.classList.remove("active");
    });
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burgertoggle");
  });
};
const languageChange = () => {
  lanEng.addEventListener("click", () => {
    lanEng.style.backgroundColor = "rgba(137, 196, 244, 0.7)";
    lanChn.style.backgroundColor = "white";
  });
  lanChn.addEventListener("click", () => {
    lanChn.style.backgroundColor = "lightBlue";
    lanEng.style.backgroundColor = "white";
  });
  lanEngS.addEventListener("click", () => {
    lanEngS.style.backgroundColor = "rgba(137, 196, 244, 0.7)";
    lanChnS.style.backgroundColor = "white";
  });
  lanChnS.addEventListener("click", () => {
    lanChnS.style.backgroundColor = "lightBlue";
    lanEngS.style.backgroundColor = "white";
  });
};

function addClickEvent(li) {
  if (li.classList.contains("active")) {
    li.classList.remove("active");
    li.classList.remove("listActive");
    li.classList.add("list");
  } else {
    list.forEach(li => {
      li.classList.remove("active");
      li.classList.remove("listActive");
      li.classList.add("list");
    });
    li.classList.remove("list");
    li.classList.toggle("active");
    li.classList.add("listActive");
  }
}

const clickEventHandler = () => {
  list.forEach(li => {
    li.addEventListener("click", () => addClickEvent(li), false);
  });
};

window.addEventListener("load", () => {
  clickEventHandler();
});

smallversion();
languageChange();
