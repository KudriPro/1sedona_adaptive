window.addEventListener('load', function () {

  //Отложенная загрузка карты
  setTimeout(function () {
    let mapIframe = document.createElement('div');
    mapIframe.classList.add('map__iframe');
    mapIframe.innerHTML = `<iframe class="map__iframe"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002934.7552609678!2d-112.46565945604802!3d34.335558081344004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1565019972901!5m2!1sru!2sru"
    height="350" frameborder="0" style="border:0" allowfullscreen></iframe>`;
    document.querySelector('.map').append(mapIframe);
  }, 3000);

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





