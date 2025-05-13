function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Biz sükûtu tac ettik",
    autoStart: true,
    cursor: "",
    delay: 1,
  });

  poemElement.innerHTML = "flower";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
