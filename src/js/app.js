const app = () => {
  // DOM elements
  const wrapper = document.querySelector(".wrapper");
  const cardDegit = [
    document.querySelector(".display-degit1"),
    document.querySelector(".display-degit2"),
    document.querySelector(".display-degit3"),
    document.querySelector(".display-degit4"),
  ];
  const cardName = document.querySelector(".card-front__content-info__nm");
  const cardNameDefault = cardName.textContent;
  const cardDate = document.querySelector(".card-front__content-info__dt");
  const cardDateDefault = cardDate.textContent;
  const cardCvc = document.querySelector(".card-back__cvc");
  const cardCvcDefault = cardCvc.textContent;
  const inputName = document.querySelector(".form__content-name");
  const inputNumber = document.querySelector(".form__content-number");
  const inputExpMonth = document.querySelector(".form__content-date__month");
  const inputExpYear = document.querySelector(".form__content-date__year");
  const inputCvc = document.querySelector(".form__content-date__cvc");
  const submitBtn = document.querySelector(".form__content-submit");

  // Real Time card info update
  const updateCard = (element, content, defaultContent) => {
    element.textContent = content;
    if (!content) element.textContent = defaultContent;
  };

  inputName.addEventListener("keyup", () => {
    updateCard(cardName, inputName.value, cardNameDefault);
  });
};

window.addEventListener("load", app);
