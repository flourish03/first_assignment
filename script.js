const change = document.getElementById("image1");

change.addEventListener("click", (event) => {
  event.target.style.background = 'red';
  event.target.style.color = "white";
});

const change2 = document.getElementById("image2");

change2.addEventListener("click", (event) => {
  event.target.style.background = 'blue';
  event.target.style.color = "red";
});

