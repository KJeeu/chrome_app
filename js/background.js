const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); //html 태그 생성
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //prepend는 body의 가장 맨 위