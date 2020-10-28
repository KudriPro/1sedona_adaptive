window.addEventListener('load', function () {

  //Показ формы поиска гостиницы
  const formShow = () => {
    const promptedBtn = document.querySelector(".prompted__btn");
    const promptedForm = document.querySelector(".prompted__form");

    promptedBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      promptedForm.classList.toggle("prompted__form--hide");
      promptedForm.classList.toggle("prompted__form--show");
    });
  };
  formShow();

  //Значения формы поиска гостиницы
  const formSearchHotels = () => {
    const removeOneAdult = document.querySelector(".prompted__btn-minus");
    const addOneAdult = document.querySelector(".prompted__btn-plus");
    const addOneChild = document.querySelector(".prompted__btn-add");
    const removeOneChild = document.querySelector(".prompted__btn-remove");
    const adultInputValue = document.querySelector("#adult");
    const childInputValue = document.querySelector("#child");

    const addPerson = (input) => {
      input.value++;
    };

    const removePerson = (input) => {
      if (input.value <= 1) {
        input.value = 1;
      } else {
        input.value--;
      }
    };

    const removeChild = (input) => {
      if (input.value <= 0) {
        input.value = 0;
      } else {
        input.value--;
      }
    };
    removeOneAdult.addEventListener("click", function () {
      removePerson(adultInputValue);
    });
    removeOneChild.addEventListener("click", function () {
      removeChild(childInputValue);
    });
    addOneAdult.addEventListener("click", function () {
      addPerson(adultInputValue);
    });
    addOneChild.addEventListener("click", function () {
      addPerson(childInputValue);
    });
  }
  formSearchHotels();

});





