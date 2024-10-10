(function () {
  //zadanie 1.
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");
  button.addEventListener("click", function (event) {
    let str = "0";
    for (let i = 1; i <= 9; i++) {
      str += "," + String(i);
    }
    content.innerText = str;
  });

  const inp = document.getElementById("ex2_text");
  const info = document.getElementById("ex2_content");
  inp.addEventListener("input", function (event) {
    let text =  event.target.value;
    const letter_regex = /[A-Za-z]+/;
    const number_regex = /\d{9}/;
    if (text.length != 9) {
      info.innerText = "Długość numeru musi być równa 9";
      return;
    }
    if (letter_regex.test(text)) {
      info.innerText = "Numer nie może zawierać liter";
      return;
    }
    if (number_regex.test(text)) {
      info.innerText = "Numer jest poprawny";
      return;
    }
    info.innerText = "Numer nie może zawierać znaków specjalnych";
  });

  //zadanie 2
  const draggable = document.getElementById("ex3_element");
  const target1 = document.getElementById("ex3_one");
  const target2 = document.getElementById("ex3_two");
  draggable.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.dropEffect = "move";
    console.log("działa");
  });
  const dragoverHandler = (event) => {
    event.preventDefault();
  };
  const dropHandler = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
  };
  target1.addEventListener("dragover", dragoverHandler);
  target1.addEventListener("drop", dropHandler);
  target2.addEventListener("dragover", dragoverHandler);
  target2.addEventListener("drop", dropHandler);
})();