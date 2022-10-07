const app = () => {
  // Parent Element
  const wrapper = document.querySelector(".wrapper");

  // inputs
  const inputName = document.querySelector(".form__content-name");
  const inputNumber = document.querySelector(".form__content-number");
  const inputExpMonth = document.querySelector(".form__content-date__month");
  const inputExpYear = document.querySelector(".form__content-date__year");
  const inputCvc = document.querySelector(".form__content-date__cvc");
  const submitBtn = document.querySelector(".form__content-submit");

  // Card Elements
  const cardDegit = [
    {
      element: document.querySelector(".display-degit1"),
      // input: inputNumber,
      value: document.querySelector(".display-degit1").textContent,
    },
    {
      element: document.querySelector(".display-degit2"),
      // input: inputNumber,
      value: document.querySelector(".display-degit2").textContent,
    },
    {
      element: document.querySelector(".display-degit3"),
      // input: inputNumber,
      value: document.querySelector(".display-degit3").textContent,
    },
    {
      element: document.querySelector(".display-degit4"),
      // input: inputNumber,
      value: document.querySelector(".display-degit4").textContent,
    },
  ];

  const cardName = {
    element: document.querySelector(".card-front__content-info__nm"),
    input: inputName,
    value: document.querySelector(".card-front__content-info__nm").textContent,
  };
  const cardExpMonth = {
    element: document.querySelector(".card-front__content-info__dt-mm"),
    input: inputExpMonth,
    value: document.querySelector(".card-front__content-info__dt-mm")
      .textContent,
  };
  const cardExpYear = {
    element: document.querySelector(".card-front__content-info__dt-yy"),
    input: inputExpYear,
    value: document.querySelector(".card-front__content-info__dt-yy")
      .textContent,
  };
  const cardCvc = {
    element: document.querySelector(".card-back__cvc"),
    input: inputCvc,
    value: document.querySelector(".card-back__cvc").textContent,
  };

  //! Application Logic
  // card real time update function
  const updateCard = (element, content, defaultContent) => {
    element.textContent = content;
    if (!content) element.textContent = defaultContent;
  };

  // Handler
  const handler = () => {
    const realTimeItems = [cardName, cardExpMonth, cardExpYear, cardCvc];

    realTimeItems.forEach((e) => {
      e.input.addEventListener("keyup", () => {
        updateCard(e.element, e.input.value, e.value);
      });
    });

    // Card degit handler
    inputNumber.addEventListener("keyup", () => {
      console.log(Math.ceil(inputNumber.value.length / 4) - 1);
      const index = Math.ceil(inputNumber.value.length / 4) - 1;

      updateCard(
        cardDegit[index].element,
        inputNumber.value.slice(index * 4, index * 4 + 4),
        cardDegit[index].value
      );
    });
  };
  handler();
};

window.addEventListener("load", app);
