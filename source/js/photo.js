window.addEventListener('load', function () {

  //Счетчики лайков
  const likeCounter = () => {
    const likeBtn = document.querySelectorAll(".photos__like-icon");
    const likeContent = document.querySelectorAll(".photos__like-count");

    for (let i = 0; i < likeBtn.length; i++) {
      likeBtn[i].addEventListener("click", function () {
        if (likeBtn[i].classList.contains('added')) {
          likeContent[i].innerHTML--;
        }
        else {
          likeContent[i].innerHTML++;
        }
        likeBtn[i].classList.toggle('added');
      });
    }
    // for (var i = 0; i < likeBtn.length; i++) {
    //   var addThumbnailClickHandler = function (thumbnail, photo) {
    //     thumbnail.addEventListener('click', function () {
    //       if (thumbnail.classList.contains('added')) {
    //         photo.innerHTML--;
    //       }
    //       else {
    //         photo.innerHTML++;
    //       }
    //       thumbnail.classList.toggle('added');
    //     });
    //   };
    //   addThumbnailClickHandler(likeBtn[i], likeContent[i]);
    // }
  };
  likeCounter();

  const video = () => {
    //Работа видеоплеера
    const fullscreenbtn = document.querySelector(".video__button-fullscrean");
    const video = document.querySelector(".video__sedona");

    fullscreenbtn.addEventListener("click", toggleFullScreen, false);

    function toggleFullScreen() {
      if (video.requestFullScreen) {
        video.requestFullScreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      }
    }
  }
  video();
});
