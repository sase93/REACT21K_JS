let header = document.querySelector("header");

window.onscroll = function () {
    headerFunction();
    scrollFunction();
}

/* function headerFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = "#b8b8b8";
        header.style.color = "#fff";
        header.style.padding = "2rem";
    } else {
        header.style.backgroundColor = "#f5deb3";
        header.style.color = "#000";
        header.style.padding = "0";
    }
} */

// ^ old style, new style below

const headerFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add("background");
    } else {
        header.classList.remove("background");
    }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", topFunction);