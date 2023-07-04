// Получаем ссылки на div и текст
const divs = document.getElementsByClassName("myDiv");
const texts = document.getElementsByClassName("text");

// Показываем первый текст по умолчанию
texts[0].classList.remove("hidden");

// Добавляем обработчики событий клика на каждый div
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", () => {
    // Скрываем предыдущий текст
    const prevPos = window.scrollY;
    for (let j = 0; j < texts.length; j++) {
      texts[j].classList.add("hidden");
    }

    texts[i].classList.remove("hidden"); // Показываем текущий текст
    window.scrollTo(0, prevPos);
  });
}

//popups
// Popup
const lockPaddingValue =
  window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"; // Получаем размер скроллбара
let lockPaddings = document.querySelectorAll(".lock-padding"); // Элементы с position: fixed

let popups = document.querySelectorAll(".popup"),
  popupLinks = document.querySelectorAll(".popup-link"),
  curentPopup,
  body = document.querySelector("body");

popupLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (curentPopup) {
      curentPopup.classList.remove("open");
    }

    curentPopup = document.querySelector(this.dataset.popup);
    curentPopup.classList.add("open");
    body.classList.add("scroll-lock"); // Отключаем скролл

    // Убираем дёргание при открытии попапа

    lockPaddings.forEach(function (elem) {
      elem.style.paddingRight = lockPaddingValue;
    });
  });
});

let popupClose = document.querySelectorAll(".popup-close");

popupClose.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (
      !e.target.closest(".popup__content") ||
      e.target.closest(".popup__close") ||
      e.target.classList.contains("popup-close")
    ) {
      popups.forEach(function (item) {
        item.classList.remove("open");
      });

      setTimeout(() => {
        body.classList.remove("scroll-lock");

        // Убираем дёргание при закрытии попапа
        body.style.paddingRight = "0px";
        lockPaddings.forEach(function (elem) {
          elem.style.paddingRight = "0px";
        });
      }, 400);
    }
  });
});

function sendMessage(message) {
  var token = "6092866528:AAHQ9CScWYfaZiCT16lQzixk2kupX4fRfvE";
  var chat_id = 1834110316;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

  fetch(url).then((res) => console.log(res));
}

var form = document.querySelector("#form");
var submit = document.querySelector("#submit-btn");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  1;
  var email = form.querySelector("#email");
  var message = form.querySelector("#message");

  if (email.value === "" || message.value === "") return;

  var msg = `${email.value}: ${message.value}`;

  sendMessage(msg);
});

const imageWrappers = document.querySelectorAll(".image-wrapper");

imageWrappers.forEach((w) => {
  w.addEventListener("click", () => {
    w.querySelectorAll(".text__overlay-info").forEach(
      (o) => (o.style.opacity = 0)
    );
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".image-wrapper"))
    imageWrappers.forEach((w) =>
      w
        .querySelectorAll(".text__overlay-info")
        .forEach((o) => o.style.removeProperty("opacity"))
    );
});

// let faq = document.querySelector(".faq");

// faq.addEventListener("click", function (e) {
//   if (e.target.classList.contains("ask")) {
//     toogleItem(e.target);
//     e.target.classList.toggle("open");
//   }
// });

// function toogleItem(ask) {
//   let answer = ask.parentNode.querySelector(".answer");

//   simpleAnimate(
//     answer,
//     30,
//     [
//       { opacity: 0, height: 0 },
//       {
//         opacity: 1,
//         height: function (el) {
//           return el.clientHeight + "px";
//         },
//       },
//     ],
//     [
//       {
//         opacity: 1,
//         height: function (el) {
//           return el.clientHeight + "px";
//         },
//       },
//       { opacity: 0, height: 0 },
//     ]
//   );
// }

// function simpleAnimate(el, rate, keyframesToShow, keyframesToHide = null) {
//   if (el.jsAnim) {
//     return;
//   }

//   el.jsAnim = true;

//   if (keyframesToHide === null) {
//     keyframesToHide = [...keyframesToShow].reverse();
//   }

//   el.closest(".faq")
//     .querySelectorAll(".item")
//     .forEach((i) => {
//       const answer = i.querySelector(".answer");
//       if (answer !== el) {
//         answer.classList.remove("open");
//         i.querySelector(".ask").classList.remove("open");
//       }
//     });

//   if (el.classList.contains("open")) {
//     let animation = el.animate(compileKeyframes(el, keyframesToHide), {
//       duration: rate,
//     });

//     animation.addEventListener("finish", function () {
//       el.classList.remove("open");
//       el.jsAnim = false;
//     });
//   } else {
//     el.classList.add("open");

//     let animation = el.animate(compileKeyframes(el, keyframesToShow), {
//       duration: rate,
//     });

//     animation.addEventListener("finish", function () {
//       el.jsAnim = false;
//     });
//   }
// }

// function compileKeyframes(el, keyframes) {
//   let res = [];

//   for (let i = 0; i < keyframes.length; i++) {
//     let frame = keyframes[i];
//     let realFrame = {};

//     for (let name in frame) {
//       realFrame[name] =
//         typeof frame[name] === "function" ? frame[name](el) : frame[name];
//     }

//     res.push(realFrame);
//   }

//   return res;
// }
