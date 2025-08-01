"use strict";

function copySlidesOnSides(sliderListWrapper, sliderSlides, n) {
  for (let i = 0; i < n; i++) {
    sliderListWrapper.appendChild(sliderSlides[i].cloneNode(true));
    sliderListWrapper.insertBefore(
      sliderSlides[sliderSlides.length - 1 - n].cloneNode(true),
      sliderSlides[0]
    );
  }
}

let firstTime = true;
function startStagesSlider() {
  let stagesListWrapper = document.querySelector(".stages__list-wrapper");
  if (stagesListWrapper && window.matchMedia("(max-width: 767px)").matches) {
    let stagesList = document.querySelector(".stages__list");
    let stagesSlides = document.querySelectorAll(".stages__slide");
    let stagesButtonPrev = document.querySelector(".stages__button--prev");
    let stagesButtonNext = document.querySelector(".stages__button--next");
    if (firstTime) {
      copySlidesOnSides(stagesListWrapper, stagesSlides, 1);
      firstTime = false;
    }
    stagesSlides = document.querySelectorAll(".stages__slide");
    stagesListWrapper.style.width = "calc(" + stagesSlides.length * 100 + "%)";
    let stagesWidth = stagesList.offsetWidth;
    let activeSlide = 1;
    stagesListWrapper.style.transform =
      "translateX(-" + activeSlide * stagesWidth + "px)";
    let posInit;
    let posFinal;
    let posX1;
    let posX2;
    let stagesButtonList = document.querySelector(".stages__button-list");
    stagesButtonList.innerHTML = "";
    let stagesButtonItem = [];
    for (let i = 0; i < stagesSlides.length - 2; i++) {
      stagesButtonItem[i] = document.createElement("button");
      stagesButtonItem[i].classList.add("stages__button-item");
      stagesButtonList.appendChild(stagesButtonItem[i]);
    }
    function switchButtonItem() {
      stagesButtonItem.forEach((item) => {
        item.classList.remove("stages__button-item--active");
      });
      stagesButtonItem[activeSlide - 1].classList.add(
        "stages__button-item--active"
      );
    }
    function activateButtons() {
      if (activeSlide == 1 || activeSlide == stagesSlides.length - 2) {
        if (activeSlide == 1) {
          stagesButtonPrev.disabled = true;
          stagesButtonNext.disabled = false;
        }
        if (activeSlide == stagesSlides.length - 2) {
          stagesButtonPrev.disabled = false;
          stagesButtonNext.disabled = true;
        }
      } else {
        stagesButtonPrev.disabled = false;
        stagesButtonNext.disabled = false;
      }
    }
    switchButtonItem();
    activateButtons();

    for (let i = 0; i < stagesSlides.length - 2; i++) {
      stagesButtonItem[i].addEventListener("click", function () {
        activeSlide = i + 1;
        stagesListWrapper.style.transform =
          "translateX(-" + activeSlide * stagesWidth + "px)";
        switchButtonItem();
        activateButtons();
      });
    }

    function nextSlide() {
      if (activeSlide < stagesSlides.length - 2) {
        activeSlide++;
        stagesListWrapper.style.transform =
          "translateX(-" + activeSlide * stagesWidth + "px)";
        switchButtonItem();
        activateButtons();
      }
    }
    function prevSlide() {
      if (activeSlide > 1) {
        activeSlide--;
        stagesListWrapper.style.transform =
          "translateX(-" + activeSlide * stagesWidth + "px)";
        switchButtonItem();
        activateButtons();
      }
    }
    stagesButtonPrev.addEventListener("click", function () {
      prevSlide();
    });
    stagesButtonNext.addEventListener("click", function () {
      nextSlide();
    });

    function getEvent() {
      return event.type.search("touch") !== -1 ? event.touches[0] : event;
    }

    function swipeStart() {
      let evt = getEvent();
      posInit = posX1 = evt.clientX;
      stagesListWrapper.addEventListener("touchmove", swipeAction);
      stagesListWrapper.addEventListener("touchend", swipeEnd);
      stagesListWrapper.addEventListener("mousemove", swipeAction);
      stagesListWrapper.addEventListener("mouseup", swipeEnd);
      stagesListWrapper.classList.remove("stages__list-wrapper--tr");
    }

    function swipeAction() {
      let evt = getEvent();
      let transform = parseInt(stagesListWrapper.style.transform.match(/\d+/));
      posX2 = posX1 - evt.clientX;
      posX1 = evt.clientX;
      stagesListWrapper.style.transform =
        "translateX(-" + (transform + posX2) + "px)";
    }

    function swipeEnd() {
      posFinal = posInit - posX1;
      stagesListWrapper.removeEventListener("touchmove", swipeAction);
      stagesListWrapper.removeEventListener("mousemove", swipeAction);
      stagesListWrapper.removeEventListener("touchend", swipeEnd);
      stagesListWrapper.removeEventListener("mouseup", swipeEnd);
      stagesListWrapper.classList.add("stages__list-wrapper--tr");

      if (Math.abs(posFinal) > stagesWidth * 0.2) {
        if (posFinal > 0) {
          if (activeSlide + 1 < stagesSlides.length - 1) {
            nextSlide();
          } else {
            stagesListWrapper.style.transform =
              "translateX(-" + activeSlide * stagesWidth + "px)";
          }
        } else {
          if (activeSlide > 1) {
            prevSlide();
          } else {
            stagesListWrapper.style.transform =
              "translateX(-" + activeSlide * stagesWidth + "px)";
          }
        }
      } else {
        if (posFinal != 0) {
          stagesListWrapper.style.transform =
            "translateX(-" + activeSlide * stagesWidth + "px)";
        }
      }
    }
    stagesListWrapper.addEventListener("touchstart", swipeStart);
    stagesListWrapper.addEventListener("mousedown", swipeStart);
  } else {
    stagesListWrapper.removeAttribute("style");
    if (!firstTime) {
      let stagesSlides = document.querySelectorAll(".stages__slide");
      stagesSlides[0].remove();
      stagesSlides[stagesSlides.length - 1].remove();
      firstTime = true;
    }
  }
}
startStagesSlider();
window.addEventListener("resize", startStagesSlider, true);

let participantsListWrapper = document.querySelector(
  ".participants__list-wrapper"
);
if (participantsListWrapper) {
  let participantsList = document.querySelector(".participants__list");
  let participantsItems = document.querySelectorAll(".participants__item");
  let participantsButtonPrev = document.querySelector(
    ".participants__button--prev"
  );
  let participantsButtonNext = document.querySelector(
    ".participants__button--next"
  );
  copySlidesOnSides(participantsListWrapper, participantsItems, 3);
  participantsItems = document.querySelectorAll(".participants__item");
  let participantsWidth;
  let activeSlide = 3;
  function startParticipantsSlider() {
    participantsWidth = participantsList.offsetWidth;
    participantsListWrapper.style.transform =
      "translateX(-" + activeSlide * participantsWidth + "px)";
    participantsListWrapper.style.width =
      "calc(" + participantsItems.length * 100 + "%)";
  }
  startParticipantsSlider();
  window.addEventListener("resize", startParticipantsSlider, true);
  let posInit;
  let posFinal;
  let posX1;
  let posX2;
  let participantsNumber = document.querySelector(".participants__number");
  let participantsSum = document.querySelector(".participants__sum");
  function switchparticipantsNumber() {
    participantsNumber.innerHTML = "" + (activeSlide - 2);
    participantsSum.innerHTML = "" + (participantsItems.length - 6);
  }
  switchparticipantsNumber();

  function nextSlide() {
    if (activeSlide >= participantsItems.length - 4) {
      participantsListWrapper.classList.remove(
        "participants__list-wrapper--tr"
      );
      activeSlide = 2;
      participantsListWrapper.style.transform =
        "translateX(-" + activeSlide * participantsWidth + "px)";
      setTimeout(function () {
        activeSlide++;
        participantsListWrapper.classList.add("participants__list-wrapper--tr");
        participantsListWrapper.style.transform =
          "translateX(-" + activeSlide * participantsWidth + "px)";
        switchparticipantsNumber();
      }, 20);
    } else {
      activeSlide++;
      participantsListWrapper.style.transform =
        "translateX(-" + activeSlide * participantsWidth + "px)";
      switchparticipantsNumber();
    }
  }
  function prevSlide() {
    if (activeSlide <= 3) {
      participantsListWrapper.classList.remove(
        "participants__list-wrapper--tr"
      );
      activeSlide = participantsItems.length - 3;
      participantsListWrapper.style.transform =
        "translateX(-" + activeSlide * participantsWidth + "px)";
      setTimeout(function () {
        activeSlide--;
        participantsListWrapper.classList.add("participants__list-wrapper--tr");
        participantsListWrapper.style.transform =
          "translateX(-" + activeSlide * participantsWidth + "px)";
        switchparticipantsNumber();
      }, 20);
    } else {
      activeSlide--;
      participantsListWrapper.style.transform =
        "translateX(-" + activeSlide * participantsWidth + "px)";
      switchparticipantsNumber();
    }
  }
  participantsButtonPrev.addEventListener("click", function () {
    prevSlide();
  });
  participantsButtonNext.addEventListener("click", function () {
    nextSlide();
  });

  function getEvent() {
    return event.type.search("touch") !== -1 ? event.touches[0] : event;
  }

  function swipeStart() {
    let evt = getEvent();
    posInit = posX1 = evt.clientX;
    participantsListWrapper.addEventListener("touchmove", swipeAction);
    participantsListWrapper.addEventListener("touchend", swipeEnd);
    participantsListWrapper.addEventListener("mousemove", swipeAction);
    participantsListWrapper.addEventListener("mouseup", swipeEnd);
    participantsListWrapper.classList.remove("participants__list-wrapper--tr");
  }

  function swipeAction() {
    let evt = getEvent();
    let transform = parseInt(
      participantsListWrapper.style.transform.match(/\d+/)
    );
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
    participantsListWrapper.style.transform =
      "translateX(-" + (transform + posX2) + "px)";
  }

  function swipeEnd() {
    posFinal = posInit - posX1;
    participantsListWrapper.removeEventListener("touchmove", swipeAction);
    participantsListWrapper.removeEventListener("mousemove", swipeAction);
    participantsListWrapper.removeEventListener("touchend", swipeEnd);
    participantsListWrapper.removeEventListener("mouseup", swipeEnd);
    participantsListWrapper.classList.add("participants__list-wrapper--tr");

    if (Math.abs(posFinal) > participantsWidth * 0.2) {
      if (posFinal > 0) {
        if (activeSlide + 1 < participantsItems.length) {
          nextSlide();
        } else {
          participantsListWrapper.style.transform =
            "translateX(-" + activeSlide * participantsWidth + "px)";
        }
      } else {
        if (activeSlide > 1) {
          prevSlide();
        } else {
          participantsListWrapper.style.transform =
            "translateX(-" + activeSlide * participantsWidth + "px)";
        }
      }
    } else {
      if (posFinal != 0) {
        participantsListWrapper.style.transform =
          "translateX(-" + activeSlide * participantsWidth + "px)";
      }
    }
  }
  participantsListWrapper.addEventListener("touchstart", swipeStart);
  participantsListWrapper.addEventListener("mousedown", swipeStart);
  setInterval(nextSlide, 4000);
}
