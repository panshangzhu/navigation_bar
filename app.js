const burger = document.getElementById("burger");
const rightMenu = document.getElementById("nav");
const list = document.querySelectorAll("header nav ul li.uplist");
const lanEng = document.getElementById("eng");
const lanChn = document.getElementById("chn");
const smallversion = () => {
  burger.addEventListener("click", () => {
    list.forEach(li => {
      li.classList.remove("active");
    });
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burgertoggle");
  });
};
const clickEvent = () => {
  list.forEach(li =>
    li.addEventListener("click", () => {
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
        li.classList.toggle("active");
        li.classList.remove("list");
        li.classList.add("listActive");
      }
    })
  );
};
const languageChange = () => {
  lanEng.addEventListener("click", () => {
    console.log(lanEng.style);
    lanEng.style.backgroundColor = "rgba(137, 196, 244, 0.7)";
    lanChn.style.backgroundColor = "white";
  });
  lanChn.addEventListener("click", () => {
    lanChn.style.backgroundColor = "lightBlue";
    lanEng.style.backgroundColor = "white";
  });
};
smallversion();
clickEvent();
languageChange();
