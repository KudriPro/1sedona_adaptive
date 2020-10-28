window.addEventListener('load', function () {

  const sortHotels = () => {
    //Сортировка отелей по цене
    const sotrPriceBtn = document.querySelector(".selection-results__byprice");
    const selectionAscending = document.querySelector(".selection-results__ascending");
    const selectiondDscending = document.querySelector(".selection-results__descending");
    //Сортировка отелей по рейтингу
    const selectionByRating = document.querySelector(".selection-results__byraing");
    //Сортировка по звёздности
    const selectionByType = document.querySelector(".selection-results__bytype");
    //Массив ссылок сартировки
    const selectionLink = document.querySelectorAll(".selection-results__link");

    //Сортировка по возрастанию
    let sort = (dataType) => {
      let resultsList = document.querySelector(".results__list");
      for (let i = 0; i < resultsList.children.length; i++) {
        for (let k = i; k < resultsList.children.length; k++) {
          if (+resultsList.children[k].getAttribute(dataType) <
            +resultsList.children[i].getAttribute(dataType)) {
            replacedNode = resultsList.replaceChild(resultsList.children[k], resultsList.children[i]);
            insertAfter(replacedNode, resultsList.children[i]);
          }
        }
      }
    };

    //Сортировка по убыванию
    let sortDsc = (dataType) => {
      let resultsList = document.querySelector(".results__list");
      for (let i = 0; i < resultsList.children.length; i++) {
        for (let k = i; k < resultsList.children.length; k++) {
          if (+resultsList.children[k].getAttribute(dataType) >
            +resultsList.children[i].getAttribute(dataType)) {
            replacedNode = resultsList.replaceChild(resultsList.children[k], resultsList.children[i]);
            insertAfter(replacedNode, resultsList.children[i]);
          }
        }
      }
    };

    let insertAfter = (elem, refElem) => {
      return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    let selectBestHotel = (selector, daraAttr) => {
      currentLinkSelection();
      selector.classList.add("current");
      sort(daraAttr);
    };

    let currentLinkSelection = () => {
      for (let i = 0; i < selectionLink.length; i++) {
        selectionLink[i].classList.remove("current");
      }
    };

    sotrPriceBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      selectBestHotel(sotrPriceBtn, "data-price");
    });

    selectionByRating.addEventListener("click", function (evt) {
      evt.preventDefault();
      selectBestHotel(selectionByRating, "data-rating");
    });

    selectionByType.addEventListener("click", function (evt) {
      evt.preventDefault();
      selectBestHotel(selectionByType, "data-star");
    });


    selectionAscending.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (sotrPriceBtn.classList.contains("current")) {
        sort("data-price");
      } else if (selectionByRating.classList.contains("current")) {
        sort("data-rating");
      } else if (selectionByType.classList.contains("current")) {
        sort("data-star");
      }
      selectionAscending.classList.add("selection-results__ranging--current");
      selectiondDscending.classList.remove("selection-results__ranging--current");
    });

    selectiondDscending.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (sotrPriceBtn.classList.contains("current")) {
        sortDsc("data-price");
      } else if (selectionByRating.classList.contains("current")) {
        sortDsc("data-rating");
      } else if (selectionByType.classList.contains("current")) {
        sortDsc("data-star");
      }
      selectionAscending.classList.remove("selection-results__ranging--current");
      selectiondDscending.classList.add("selection-results__ranging--current");
    });
  };
  sortHotels();

  // Ранжирование цен(ползунки)
  const rangePriceHotels = () => {
    const priceSlider = document.getElementById('range__slider');

    noUiSlider.create(priceSlider, {
      start: [2000, 6900],
      connect: true,
      padding: 0,
      step: 50,
      range: {
        'min': 500,
        'max': 10000
      },
      format: {
        to: function (value) {
          return Math.ceil(value);
        },
        from: function (value) {
          return Math.ceil(value);
        }
      }
    });

    const inputMinNumber = document.querySelector('.range__label--lower');
    const inputMaxNumber = document.querySelector('.range__label--upper');

    priceSlider.noUiSlider.on('update', function (values, handle) {

      let value = values[handle];

      if (handle) {
        inputMaxNumber.value = Math.ceil(value);
      } else {
        inputMinNumber.value = Math.ceil(value);
      }
    });
    inputMaxNumber.addEventListener('change', function () {
      priceSlider.noUiSlider.set([this.value, null]);
    });

    inputMinNumber.addEventListener('change', function () {
      priceSlider.noUiSlider.set([null, this.value]);
    });
  };
  rangePriceHotels();

});

