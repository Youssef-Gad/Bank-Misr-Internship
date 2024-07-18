// Carasoul
let carasoulText = document.querySelector(".carasoul-text");
let bullets = document.querySelectorAll(".bullets .bullet");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

rightArrow.addEventListener("click", () => {
  let currenText,
    currentBullet,
    flag = 0;
  for (let bullet of Array.from(bullets)) {
    if (bullet.classList.contains("active")) {
      currentBullet = bullet;
    }
  }

  if (currentBullet === bullets[bullets.length - 1]) {
    currentBullet = bullets[0];
    flag = 1;
  }
  bullets.forEach((bullet) => bullet.classList.remove("active"));
  bullets.forEach((bullet) => {
    if (flag) {
      if (currentBullet === bullet) bullet.classList.add("active");
    } else {
      if (currentBullet.nextSibling.nextSibling === bullet)
        bullet.classList.add("active");
    }
  });
  for (let bullet of Array.from(bullets)) {
    if (bullet.classList.contains("active")) {
      currenText = bullet.getAttribute("data-carasoul");
    }
  }
  carasoulText.textContent = currenText;
});

leftArrow.addEventListener("click", () => {
  let currenText,
    currentBullet,
    flag = 0;
  for (let bullet of Array.from(bullets)) {
    if (bullet.classList.contains("active")) {
      currentBullet = bullet;
    }
  }

  if (currentBullet === bullets[0]) {
    currentBullet = bullets[bullets.length - 1];
    flag = 1;
  }
  bullets.forEach((bullet) => bullet.classList.remove("active"));
  bullets.forEach((bullet) => {
    if (flag) {
      if (currentBullet === bullet) bullet.classList.add("active");
    } else {
      if (currentBullet.previousSibling.previousSibling === bullet)
        bullet.classList.add("active");
    }
  });
  for (let bullet of Array.from(bullets)) {
    if (bullet.classList.contains("active")) {
      currenText = bullet.getAttribute("data-carasoul");
    }
  }
  carasoulText.textContent = currenText;
});

// Card Game
const NUMBERS_OF_CARDS = 16;
let imageGame = document.querySelector(".image-game");

let images = [],
  imageSrc;
for (let i = 1; i <= NUMBERS_OF_CARDS / 2; i++) {
  imageSrc = `./assets/img${i}.png`;
  let image = document.createElement("img");
  let image2 = document.createElement("img");
  image.classList.add("image");
  image2.classList.add("image");
  image.setAttribute("src", imageSrc);
  image2.setAttribute("src", imageSrc);

  images.push(image);
  images.push(image2);
}

function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleImages(images);

images.map((image) => {
  let imageCard = document.createElement("div");
  imageCard.classList.add("image-card");
  imageCard.appendChild(image);
  imageGame.appendChild(imageCard);
});

let imageCards = document.querySelectorAll(".image-game .image-card");

let cnt = 0,
  doneCards = 0,
  image1,
  image2;

Array.from(imageCards).forEach((card) => {
  card.addEventListener("click", () => {
    Array.from(card.children)[0].style.display = "block";
    cnt++;
    if (cnt === 1) image1 = card.children[0];

    if (cnt === 2) {
      image2 = card.children[0];
      if (image1.src === image2.src) {
        doneCards++;
        image1.classList.add("done");
        image2.classList.add("done");
      } else {
        image1.style.display = "none";
        image2.style.display = "none";
      }
      cnt = 0;
    }

    if (doneCards === NUMBERS_OF_CARDS / 2) {
      let winText = document.querySelector(".win");
      winText.style.display = "block";
    }
    console.log(cnt);
  });
});
