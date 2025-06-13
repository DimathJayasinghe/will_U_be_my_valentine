// Preload images
const imagesToPreload = [
  "https://media.tenor.com/lSgJHaor3IAAAAAj/bubu-onetwo.gif",
  "https://media.tenor.com/jq-K8XaaWb4AAAAj/peach-goma.gif",
  "https://media.tenor.com/pUQGNMgYn1cAAAAi/tkthao219-bubududu.gif",
];
imagesToPreload.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const yes_button = document.getElementById("yes_button");
const no_button = document.getElementById("no_button");
const heading = document.getElementById("heading");
const image = document.getElementById("image");
const phrases = [
  "cutey wooty!",
  "Pookiy pookiy!",
  "Cutie pie!",
  "Honey bunny!",
  "Sweetheart!",
  "Pinky promise?",
];

const bubu_sad_images =
  "https://media.tenor.com/lSgJHaor3IAAAAAj/bubu-onetwo.gif";

const bubu_happy_images =
  "https://media.tenor.com/jq-K8XaaWb4AAAAj/peach-goma.gif";

const said_yes =
  "https://media.tenor.com/pUQGNMgYn1cAAAAi/tkthao219-bubududu.gif";

yes_button.addEventListener("click", () => {
  yes_button.removeEventListener("mouseover",getHappy);
  yes_button.removeEventListener("mouseout",getSad);
  heading.textContent = "Yay! I knew you would say yes!";
  heading.style.fontSize = "40px";
  image.src = said_yes;
  yes_button.style.display = "none";
  no_button.style.display = "none";
});

function getSad(){
  image.src = bubu_sad_images;
}
function getHappy(){
  image.src = bubu_happy_images;
}
yes_button.addEventListener("mouseover", getHappy);
yes_button.addEventListener("mouseout", getSad);

no_button.addEventListener("click", () => {
  getSad();
  // heading.textContent = "Bubu is sad now!";
  heading.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  heading.style.fontSize = "30px";
  heading.style.color = "red";

  const computedStyle = window.getComputedStyle(yes_button);
  const currentWidth = parseInt(computedStyle.width);
  const currentHeight = parseInt(computedStyle.height);
  const currentFontSize = parseInt(computedStyle.fontSize);

  var newWidth = currentWidth + 70;
  var newHeight = currentHeight + 70;

  yes_button.style.left = yes_button.offsetLeft + 70 + "px";
  yes_button.style.top = yes_button.offsetTop - 60 + "px";
  yes_button.style.width = newWidth + "px";
  yes_button.style.height = newHeight + "px";
  yes_button.style.fontSize = currentFontSize + 40 + "px";
});
