const buttons = document.querySelectorAll(".pianoKey");
let counter = 1;
buttons.forEach((element) => {
  element.innerHTML = `<audio src="./sounds/key_${counter++}.mp3"></audio>`;
  element.addEventListener("click", () => {
    element.children[0].play();
  });
});
