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

var forms = document.querySelectorAll(".tg-form");

forms.forEach((form) => {
  var submit = form.querySelector("#submit-btn");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    1;
    var email = form.querySelector("#email");
    var message = form.querySelector("#message");

    if (email.value === "" || message.value === "") return;

    var msg = `${email.value}: ${message.value}`;

    sendMessage(msg);
  });
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
