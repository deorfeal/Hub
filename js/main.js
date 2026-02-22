// document.querySelectorAll('.faq-list__item').forEach(item => {
//     item.addEventListener('click', () => {
//         // Если элемент уже активен, убрать активный класс
//         if (item.classList.contains('faq-list__item--active')) {
//             item.classList.remove('faq-list__item--active');
//         } else {
//             // Убираем класс у всех элементов
//             document.querySelectorAll('.faq-list__item').forEach(el => el.classList.remove('faq-list__item--active'));
//             // Добавляем класс текущему элементу
//             item.classList.add('faq-list__item--active');
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var x, i, j, l, ll, selElmnt, a, b, c;
//   /* Look for any elements with the class "custom-select": */
//   x = document.getElementsByClassName("custom-select");
//   l = x.length;
//   for (i = 0; i < l; i++) {
//     selElmnt = x[i].getElementsByTagName("select")[0];
//     ll = selElmnt.length;
//     /* For each element, create a new DIV that will act as the selected item: */
//     a = document.createElement("DIV");
//     a.setAttribute("class", "select-selected");
//     a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//     x[i].appendChild(a);
//     /* For each element, create a new DIV that will contain the option list: */
//     b = document.createElement("DIV");
//     b.setAttribute("class", "select-items select-hide");
//     for (j = 1; j < ll; j++) {
//       /* For each option in the original select element,
//           create a new DIV that will act as an option item: */
//       c = document.createElement("DIV");
//       c.innerHTML = selElmnt.options[j].innerHTML;
//       c.addEventListener("click", function (e) {
//         /* When an item is clicked, update the original select box,
//               and the selected item: */
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//       });
//       b.appendChild(c);
//     }
//     x[i].appendChild(b);
//     a.addEventListener("click", function (e) {
//       /* When the select box is clicked, close any other select boxes,
//           and open/close the current select box: */
//       e.stopPropagation();
//       closeAllSelect(this);
//       this.nextSibling.classList.toggle("select-hide");
//       this.classList.toggle("select-arrow-active");
//     });
//   }

//   function closeAllSelect(elmnt) {
//     /* A function that will close all select boxes in the document,
//       except the current select box: */
//     var x,
//       y,
//       i,
//       xl,
//       yl,
//       arrNo = [];
//     x = document.getElementsByClassName("select-items");
//     y = document.getElementsByClassName("select-selected");
//     xl = x.length;
//     yl = y.length;
//     for (i = 0; i < yl; i++) {
//       if (elmnt == y[i]) {
//         arrNo.push(i);
//       } else {
//         y[i].classList.remove("select-arrow-active");
//       }
//     }
//     for (i = 0; i < xl; i++) {
//       if (arrNo.indexOf(i)) {
//         x[i].classList.add("select-hide");
//       }
//     }
//   }

//   /* If the user clicks anywhere outside the select box,
//   then close all select boxes: */
//   document.addEventListener("click", closeAllSelect);
// });

// Чек боксы и их родители

// document.querySelectorAll('.method-item__input').forEach(function (checkbox) {
//     checkbox.addEventListener('click', function () {
//         // Убираем checked у всех элементов
//         document.querySelectorAll('.method-item__input').forEach(function (otherCheckbox) {
//             otherCheckbox.checked = false;
//             otherCheckbox.closest('.method-item').classList.remove('method-item--active');
//         });

//         // Ставим checked только на выбранный элемент
//         this.checked = true;

//         // Добавляем активный класс родителю выбранного элемента
//         this.closest('.method-item').classList.add('method-item--active');
//     });
// });

//

// Получаем все элементы с классом tub
// if ( document.querySelector('.tub') ) {
//     const tabs = document.querySelectorAll('.tub');
//     const tubElement = document.querySelectorAll('.tub-element');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', function () {
//             tabs.forEach(t => t.classList.remove('tub--active'));

//             this.classList.add('tub--active');

//             tubElement.forEach(tub => tub.classList.remove('tub-element--active'));

//             const tubElementToActivate = document.querySelector(`.tub-element[id="${this.id}"]`);

//             if (tubElementToActivate) {
//                 tubElementToActivate.classList.add('tub-element--active');
//             }
//         });
//     });
// }
//

$(function () {
  $(".burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });

  $(".menu__link").on("click", function (event) {
    $("body").toggleClass("body--active");
  });
  // $('.header-top-lang').on('click', function (event) {
  //     $('.header-top-lang-content').toggleClass('header-top-lang-content--active');
  //     $(this).toggleClass('header-top-lang--active');
  // });

  // Делаем попап и скрываем по клику вне его
  // $(document).ready(function () {
  //     var $popup = $('.popup');
  //     var $popups = {
  //         call: $('.popup--call'),
  //         application: $('.popup--application'),
  //     };

  //     // Функция для показа попапа
  //     function showPopup($popupToShow) {
  //         $popupToShow.addClass('popup--active').fadeIn(250, function () {
  //             $(this).animate({ opacity: 1 }, 250);
  //         });
  //         $('body').addClass('body--popup');
  //     }

  //     // Функция для скрытия попапа
  //     function hidePopup($popupToHide) {
  //         $popupToHide.removeClass('popup--active').fadeOut(250, function () {
  //             $(this).animate({ opacity: 1 }, 250);
  //         });
  //         $('body').removeClass('body--popup');
  //     }

  //     // Обработчики кликов для показа попапов
  //     $('.heading-body__link').click(function (event) {
  //         event.stopPropagation();
  //         event.preventDefault();
  //         showPopup($popups.application);
  //     });

  //     // Обработчик кликов для скрытия попапов
  //     $('.cls').click(function (event) {
  //         event.stopPropagation();
  //         event.preventDefault();
  //         hidePopup($popup);
  //     });

  //     // Скрываем попап при клике вне его области
  //     $(document).click(function (event) {
  //         $.each($popups, function (key, $popupToCheck) {
  //             if ($popupToCheck.hasClass('popup--active')) {
  //                 var $popupInner = $popupToCheck.find('.popup__inner');
  //                 if (!$popupInner.is(event.target) && $popupInner.has(event.target).length === 0) {
  //                     hidePopup($popupToCheck);
  //                 }
  //             }
  //         });
  //     });
  // });
  //

  // Копировать значение с инпута
  // if (document.querySelector('.transfer-body__wallet-copy')) {
  //     document.querySelector('.transfer-body__wallet-copy').addEventListener('click', function () {
  //         // Находим элемент <input> по его id
  //         var inputElement = document.querySelector('.transfer-body__wallet-input');

  //         // Вызываем метод select() для выбора текста внутри элемента <input>
  //         inputElement.select();

  //         // Выполняем команду копирования выбранного текста в буфер обмена
  //         document.execCommand('copy');

  //         // Снимаем фокус с элемента, чтобы выделение текста не оставалось
  //         inputElement.blur();

  //         // Подсветка кнопки для обратной связи
  //         this.classList.add('copied');

  //         // Через какое-то время убираем подсветку кнопки
  //         setTimeout(function () {
  //             document.querySelector('.transfer-body__wallet-copy').classList.remove('copied');
  //         }, 500);
  //     });
  // }
});

// Делаем высоту слайдов одинаковой
// function setMaxHeightForProjects() {
//     setTimeout(() => {
//         let heights = [];

//         // Получаем высоту каждого элемента и добавляем в массив
//         document.querySelectorAll('.projects-swiper__slide').forEach(function (slide) {
//             heights.push(slide.getBoundingClientRect().height);
//         });

//         let maxHeight = Math.max(...heights);

//         // Устанавливаем высоту каждого элемента в самую большую высоту
//         document.querySelectorAll('.projects-swiper__slide').forEach(function (slide) {
//             slide.style.minHeight = maxHeight + 'px';
//         });
//     }, 200)
// }

// $(function () {
//     // Получаем нужный элемент
//     if (document.querySelector('.projects')) {
//         var element = document.querySelector('.projects');

//         var newsVisible = function (target) {
//             // let headerBottom = document.querySelectorAll('.header-bottom')[0]
//             // var menuBtn = document.querySelectorAll('.menu-btn')[0]
//             // var footerTop = document.querySelectorAll('.footer-top')[0]
//             // Все позиции элемента
//             var targetPosition = {
//                     top: window.pageYOffset + target.getBoundingClientRect().top,
//                     left: window.pageXOffset + target.getBoundingClientRect().left,
//                     right: window.pageXOffset + target.getBoundingClientRect().right,
//                     bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//                 },
//                 // Получаем позиции окна
//                 windowPosition = {
//                     top: window.pageYOffset,
//                     left: window.pageXOffset,
//                     right: window.pageXOffset + document.documentElement.clientWidth,
//                     bottom: window.pageYOffset + document.documentElement.clientHeight
//                 };

//             if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//                 targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//                 targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//                 targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//                 // Если элемент полностью видно, то запускаем следующий код
//                 setTimeout(() => {
//                     setMaxHeightForProjects()
//                 }, 1000)
//             } else {};
//         };

//         // Запускаем функцию при прокрутке страницы
//         window.addEventListener('scroll', function () {
//             newsVisible(element);
//         });

//         // А также запустим функцию сразу. А то вдруг, элемент изначально видно
//         newsVisible(element);
//     }
// })
//

new Swiper(".companies-swiper", {
  slidesPerView: 1.88,
  loop: true,
  initialSlide: 1,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 750,
  navigation: {
    prevEl: ".companies-swiper__arrow--left",
    nextEl: ".companies-swiper__arrow--right",
  },
  // pagination: {
  //     el: '.recalls-swiper__pagination',
  //     type: 'bullets',
  // },
  // autoplay: {
  //     delay: 5000, // задержка между слайдами в миллисекундах
  //     disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
  // },
  breakpoints: {
    301: {
      slidesPerView: 1.37,
      loop: true,
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 30,
      speed: 750,
    },
    1401: {
      slidesPerView: 1.88,
      loop: true,
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 30,
      speed: 750,
    },
  },
});

// Aos - the right initialisation
// jQuery(document).ready(function () {
//     (function () {
//         // your page initialization code here
//         // the DOM will be available here
//         AOS.init({
//             duration: 1000,
//             offset: 0, // offset (in px) from the original trigger point
//             anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
//         });
//     })();
// });
// //

// timer
// setInterval(() => {
//     let timeNow = new Date() // Время сейчас
//     let timeNowTimeStamp = timeNow.getTime() // сколько прошоло с 1970 до теперешнего момената
//     // console.log(timeNowTimeStamp)

//     let ourDate = new Date('2023-03-19T23:14:00') // Время нашего знакомства
//     let ourDateTimeStamp = ourDate.getTime() // сколько прошоло с 1970 до теперешнего момената
//     // console.log(ourDateTimeStamp)

//     let timeStampMilliseconds = ourDateTimeStamp - timeNowTimeStamp // Миллисекунды ( разница между временем теперь и временем нашей встречи )

//     let secondsOfTimeStamp = timeStampMilliseconds / 1000 // Секунды - разницы
//     let minutesOfTimeStamp = secondsOfTimeStamp / 60 // минуты - разницы
//     let hoursOfTimeStamp = minutesOfTimeStamp / 60 // часы - разницы
//     let daysOfTimeStamp = hoursOfTimeStamp / 24 // Дни - разницы

//     let secondsOfTimeStampFloor = Math.floor(timeStampMilliseconds / 1000) // Секунды - разницы
//     let minutesOfTimeStampFloor = Math.floor(secondsOfTimeStamp / 60) // минуты - разницы
//     let secondsRamnant = secondsOfTimeStampFloor - (minutesOfTimeStampFloor * 60) // Остаток секунд - то есть наши секунды в Html
//     let hoursOfTimeStampFloor = Math.floor(minutesOfTimeStamp / 60) // часы - разницы
//     let minutesRamnant = minutesOfTimeStampFloor - (hoursOfTimeStampFloor * 60) // Остаток минут - то есть наши минуты в Html
//     let daysOfTimeStampFloor = Math.floor(hoursOfTimeStamp / 24) // Дни - разницы
//     let hoursRamnant = hoursOfTimeStampFloor - (daysOfTimeStampFloor * 24) // Остаток часов - то есть наши часы в Html

//     let hours = document.querySelector('.header-bottom-body-row__item-text--hours')

//     let minutes = document.querySelector('.header-bottom-body-row__item-text--minutes')

//     let seconds = document.querySelector('.header-bottom-body-row__item-text--seconds')

//     // // //

//     seconds.innerHTML = secondsRamnant

//     if (hoursRamnant < 10) {
//         console.log(String(hoursRamnant)[0])
//         hours.innerHTML = '0' + String(hoursRamnant) + '<span>:</span>'
//     } else {
//         hours.innerHTML = String(hoursRamnant) + '<span>:</span>'
//     }

//     if (minutesRamnant < 10) {
//         minutes.innerHTML = '0' + String(minutesRamnant) + '<span>:</span>'
//     } else {
//         minutes.innerHTML = String(minutesRamnant) + '<span>:</span>'
//     }

//     if (secondsRamnant < 10) {
//         seconds.innerHTML = '0' + String(secondsRamnant)
//     } else {
//         seconds.innerHTML = String(secondsRamnant)
//     }
// }, 1000)
// //

// typed js

// $(".typed").typed({
//     strings: ["Графічним дизайнерам", "Початковим веб-дизайнерам", "Студентам/школярам", "Офісним працівникам"],
//     // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
//     stringsElement: null,
//     // typing speed
//     typeSpeed: 30,
//     // time before typing starts
//     startDelay: 1200,
//     // backspacing speed
//     backSpeed: 20,
//     // time before backspacing
//     backDelay: 500,
//     // loop
//     loop: true,
//     // false = infinite
//     loopCount: 5,
//     // show cursor
//     showCursor: false,
//     // character for cursor
//     cursorChar: "|",
//     // attribute to type (null == text)
//     attr: null,
//     // either html or text
//     contentType: 'html',
//     // call when done callback function
//     callback: function () {},
//     // starting callback function before each string
//     preStringTyped: function () {},
//     //callback for every typed string
//     onStringTyped: function () {},
//     // callback for reset
//     resetCallback: function () {}
// });
// //

// Phone mask

// window.addEventListener("DOMContentLoaded", function () {
//     [].forEach.call(document.querySelectorAll('.tel'), function (input) {
//         var keyCode;

//         function mask(event) {
//             event.keyCode && (keyCode = event.keyCode);
//             var pos = this.selectionStart;
//             if (pos < 3) event.preventDefault();
//             var matrix = "+7 (___) ___-____",
//                 i = 0,
//                 def = matrix.replace(/\D/g, ""),
//                 val = this.value.replace(/\D/g, ""),
//                 new_value = matrix.replace(/[_\d]/g, function (a) {
//                     return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//                 });
//             i = new_value.indexOf("_");
//             if (i != -1) {
//                 i < 5 && (i = 3);
//                 new_value = new_value.slice(0, i)
//             }
//             var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//                 function (a) {
//                     return "\\d{1," + a.length + "}"
//                 }).replace(/[+()]/g, "\\$&");
//             reg = new RegExp("^" + reg + "$");
//             if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//             if (event.type == "blur" && this.value.length < 5) this.value = ""
//         }

//         input.addEventListener("input", mask, false);
//         input.addEventListener("focus", mask, false);
//         input.addEventListener("blur", mask, false);
//         input.addEventListener("keydown", mask, false)

//     });

// });

// //

// Visibilyto of element on scroll or not
// $(function () {
//     // Получаем нужный элемент
//     var element = document.querySelector('footer');

//     var Visible = function (target) {
//         // let headerBottom = document.querySelectorAll('.header-bottom')[0]
//         // var menuBtn = document.querySelectorAll('.menu-btn')[0]
//         // var footerTop = document.querySelectorAll('.footer-top')[0]
//         // Все позиции элемента
//         var targetPosition = {
//                 top: window.pageYOffset + target.getBoundingClientRect().top,
//                 left: window.pageXOffset + target.getBoundingClientRect().left,
//                 right: window.pageXOffset + target.getBoundingClientRect().right,
//                 bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//             },
//             // Получаем позиции окна
//             windowPosition = {
//                 top: window.pageYOffset,
//                 left: window.pageXOffset,
//                 right: window.pageXOffset + document.documentElement.clientWidth,
//                 bottom: window.pageYOffset + document.documentElement.clientHeight
//             };

//         if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//             targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//             targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//             targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//             // Если элемент полностью видно, то запускаем следующий код
//             $('.connection__bottom-btn').addClass('connection__bottom-btn--none')
//             $('.connection').addClass('connection-margin')

//         } else {
//             $('.connection__bottom-btn').removeClass('connection__bottom-btn--none')
//             $('.connection').removeClass('connection-margin')
//         };
//     };

//     // Запускаем функцию при прокрутке страницы
//     window.addEventListener('scroll', function () {
//         Visible(element);
//     });

//     // А также запустим функцию сразу. А то вдруг, элемент изначально видно
//     Visible(element);
// })
// //
