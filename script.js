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
    let text = inp.innerText;
    const letter_regex = /[A-Za-z]+/;
    const special_regex = /(\w|\d)+/;
    if (text.length !== 9) {
      info.innerText = "Długość numeru musi być równa 9";
      return;
    }
    if (letter_regex.test(text)) {
      info.innerText = "Numer nie może zawierać liter";
      return;
    }
    if (!special_regex.test(text)) {
      info.innerText = "Numer nie może zawierać znaków specjalnych";
      return;
    }
    info.innerText = "Numer jest poprawny";

  });
})();