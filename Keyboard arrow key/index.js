window.addEventListener("keyup", arrowUp);
window.addEventListener("keydown", arrowDown);

function arrowDown(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
  key.classList.add("press");
}
function arrowUp(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
  key.classList.remove("press");
}

var newarrowupDiv = document.createElement("p");
newarrowupDiv.innerHTML = "Up";
newarrowupDiv.style.display = "none";
newarrowupDiv.style.textAlign = "center";
document.body.appendChild(newarrowupDiv);

document.addEventListener("keyup", function (event) {
  if (event.code === "ArrowUp") {
    clickUp();
  }
});

function clickUp() {
  if (newarrowupDiv.style.display === "none") {
    newarrowupDiv.style.display = "block";
  } else {
    newarrowupDiv.style.display = "none";
  }
}
function myFunctionup() {
  document.querySelector(".textup").innerHTML = "Up";
}

var newarrowdownDiv = document.createElement("div");
newarrowdownDiv.style.display = "none";
newarrowdownDiv.innerHTML = "Down";
newarrowdownDiv.style.textAlign = "center";
newarrowdownDiv.style.margin = "12px";

document.body.appendChild(newarrowdownDiv);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    clickdown();
  }
});
function clickdown() {
  if (newarrowdownDiv.style.display === "none") {
    newarrowdownDiv.style.display = "block";
  } else {
    newarrowdownDiv.style.display = "none";
  }
}

function myFunctionleft() {
  document.querySelector(".textleft").innerHTML = "Left";
}
var newarrowleftDiv = document.createElement("div");
newarrowleftDiv.style.display = "none";
newarrowleftDiv.innerHTML = "Left";
newarrowleftDiv.style.textAlign = "center";
newarrowleftDiv.style.margin = "12px";

document.body.appendChild(newarrowleftDiv);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    clickleft();
  }
});
function clickleft() {
  if (newarrowleftDiv.style.display === "none") {
    newarrowleftDiv.style.display = "block";
  } else {
    newarrowleftDiv.style.display = "none";
  }
}

function myFunctiondown() {
  document.querySelector(".textdown").innerHTML = "Down";
}
var newarrowRightDiv = document.createElement("div");
newarrowRightDiv.style.display = "none";
newarrowRightDiv.innerHTML = "Right";
newarrowRightDiv.style.textAlign = "center";
newarrowRightDiv.style.margin = "12px";

document.body.appendChild(newarrowRightDiv);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    clickRight();
  }
});

function clickRight() {
  if (newarrowRightDiv.style.display === "none") {
    newarrowRightDiv.style.display = "block";
  } else {
    newarrowRightDiv.style.display = "none";
  }
}

function myFunctionright() {
  document.querySelector(".textright").innerHTML = "Down";
}
