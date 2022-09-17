
const heartButton = document.getElementById('heart-button');
const runAwayButton = document.getElementById("run-button");
const OFFSET = 150;


runAwayButton.addEventListener("click", () => {
  alert("Con gái nói ko là có nhé. Iu cậu <3");
});

runAwayButton.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  runAwayButton.classList.add("no");
  const buttonBox = runAwayButton.getBoundingClientRect();
  const horizontalDistanceFrom = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFrom = distanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );
  const horizontalOffeset = buttonBox.width / 2 + OFFSET;
  const verticalOffeset = buttonBox.height / 2 + OFFSET;
  if (
    Math.abs(horizontalDistanceFrom) <= horizontalOffeset &&
    Math.abs(verticalDistanceFrom) <= verticalOffeset
  ) {
    setButtonPostion(
      buttonBox.x + (horizontalOffeset / horizontalDistanceFrom) * 10,
      buttonBox.y + (verticalOffeset / verticalDistanceFrom) * 10
    );
  }
});

setButtonPostion = (left, top) => {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = runAwayButton.getBoundingClientRect();
  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;

  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;

  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET;

  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;

  }
  runAwayButton.style.left = `${left}px`;
  runAwayButton.style.top = `${top}px`;
};

distanceFromCenter = (boxPosition, mousePosition, boxSize) => {
  return boxPosition - mousePosition + boxSize / 2;
};



function heartRain(){
    const heart = document.createElement("div");
    heart.innerText =  "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + "s";
    heart.classList.add("heart");
    document.body.appendChild(heart);
}




heartButton.addEventListener('click', () => {
    heartRain();
    setInterval(heartRain, 5);
    runAwayButton.style.visibility = "hidden";
  })