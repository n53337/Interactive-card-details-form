const app = () => {
  // Parent Element
  const wrapper = document.querySelector(".wrapper");

  // Form
  const form = document.querySelector(".form__content");
  const errorElement = document.querySelector(".input-error-msg");
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
      value: document.querySelector(".display-degit1").textContent,
    },
    {
      element: document.querySelector(".display-degit2"),
      value: document.querySelector(".display-degit2").textContent,
    },
    {
      element: document.querySelector(".display-degit3"),
      value: document.querySelector(".display-degit3").textContent,
    },
    {
      element: document.querySelector(".display-degit4"),
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

  //! APPLICATION LOGIC

  // Card data real-time update function
  const updateCard = (element, content, defaultContent) => {
    element.textContent = content;
    if (!content) element.textContent = defaultContent;
  };

  // Handler
  const handler = () => {
    // Name/ExpDate/Cvc real-time update
    const realTimeItems = [cardName, cardExpMonth, cardExpYear, cardCvc];
    realTimeItems.forEach((e) => {
      e.input.addEventListener("keyup", () => {
        updateCard(e.element, e.input.value, e.value);
      });
    });

    // Card digit input parce
    inputNumber.addEventListener("keydown", () => {
      const spaceIndex = [4, 9, 14];
      spaceIndex.forEach((e) => {
        if (inputNumber.value.length === e) {
          inputNumber.value += " ";
        }
      });
    });

    // Card digit real-time update
    inputNumber.addEventListener("keyup", () => {
      const inptValue = inputNumber.value.length;
      const callUpdateCard = (index, cut) => {
        updateCard(
          cardDegit[index].element,
          inputNumber.value.slice(cut[0], cut[1]),
          cardDegit[index].value
        );
      };
      if (0 <= inptValue <= 4) callUpdateCard(0, [0, 4]);
      if (4 <= inptValue <= 9) callUpdateCard(1, [5, 9]);
      if (10 <= inptValue <= 14) callUpdateCard(2, [10, 14]);
      if (15 <= inptValue <= 19) callUpdateCard(3, [15, 19]);
    });
  };
  handler();

  // Form Validation

  const formValidation = () => {
    // check Form
    const checkForm = () => {
      // error display
      const displayError = (parentElm, message) => {
        const errElm = document.querySelector(
          `.${parentElm.classList[0]} .input-error-msg`
        );
        errElm.style.display = "block";
        errElm.textContent = message;
      };

      // valid form
      const valid = () => {};

      // checking card number
      const cardAbsValue = inputNumber.value.replaceAll(" ", "");
      if (!Number.isInteger(Number(cardAbsValue))) {
        displayError(inputNumber.parentElement, "hhh");
      }

      // checking date
      [inputExpMonth, inputExpYear].forEach((e) => {
        if (!Number.isInteger(Number(e.value))) {
          displayError(e.parentElement.parentElement, "test");
        }
      });

      // checking date
      if (!Number.isInteger(Number(inputCvc.value))) {
        displayError(inputCvc.parentElement, "hello");
      }
    };

    // form handler
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkForm();
    });
  };
  formValidation();
};

window.addEventListener("load", app);
