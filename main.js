const numId = document.querySelector("#num-id");
const adviceText = document.querySelector(".advice-text");
const diceBtn = document.querySelector(".dice-btn");

const randomIdFunc = () => Math.trunc(Math.random() * 224 + 1);

const renderAdvice = function () {
  const randomId = randomIdFunc();
  // fetch(
  //   `https://api.adviceslip.com/advice/${
  //     randomId == 48 ? randomIdFunc() : randomId
  //   }`
  // )
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => {
      if (!res.ok) throw new Error(`Error, please try again`);
      return res.json();
    })
    .then((adv) => {
      const { slip } = adv;
      if (!slip) throw new Error(`Error, please try again`);
      console.log(randomId, slip);
      numId.innerHTML = slip.id;
      adviceText.innerHTML = `"${slip.advice}"`;
    })
    .catch((err) => {
      adviceText.innerHTML = `<span class="error">${err.message}</span>`;
      console.error(err.message);
    });
};

// renderAdvice();

window.addEventListener("load", renderAdvice);

diceBtn.addEventListener("click", renderAdvice);
