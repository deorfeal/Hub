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

//

if (document.querySelector(".keyboard")) {
  (function () {
    const layouts = {
      ru: {
        normal: [
          ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
          ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
          ["SHIFT", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "BACK"],
          ["123", "LANG", " ", "ENTER"],
        ],
        shift: [
          ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
          ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
          ["SHIFT", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "BACK"],
          ["123", "LANG", " ", "ENTER"],
        ],
        nums: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["-", "/", ":", ";", "(", ")", ",", "!", "?", "@"],
          ["ABC", ".", ",", '"', "'", "_", "&", "%", "=", "BACK"],
          ["ABC", "LANG", " ", "ENTER"],
        ],
      },
      en: {
        normal: [
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
          ["SHIFT", "z", "x", "c", "v", "b", "n", "m", ",", ".", "BACK"],
          ["123", "LANG", " ", "ENTER"],
        ],
        shift: [
          ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
          ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
          ["SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "BACK"],
          ["123", "LANG", " ", "ENTER"],
        ],
        nums: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["-", "/", ":", ";", "(", ")", ",", "!", "?", "@"],
          ["ABC", ".", ",", '"', "'", "_", "&", "%", "=", "BACK"],
          ["ABC", "LANG", " ", "ENTER"],
        ],
      },
      kk: {
        normal: [
          ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
          ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
          ["SHIFT", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ң", "BACK"],
          ["ә", "ғ", "қ", "ү", "ұ", "і", "ө", "һ"],
          ["123", "LANG", " ", "ENTER"],
        ],
        shift: [
          ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
          ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
          ["SHIFT", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "Ң", "BACK"],
          ["Ә", "Ғ", "Қ", "Ү", "Ұ", "І", "Ө", "Һ"],
          ["123", "LANG", " ", "ENTER"],
        ],
        nums: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["-", "/", ":", ";", "(", ")", ",", "!", "?", "@"],
          ["ABC", ".", ",", '"', "'", "_", "&", "%", "=", "BACK"],
          ["ABC", "LANG", " ", "ENTER"],
        ],
      },
    };

    const langOrder = ["ru", "en", "kk"];
    const langNames = { ru: "RU", en: "EN", kk: "ҚАЗ" };

    let currentLang = "ru";
    let isShift = false;
    let isNums = false;

    const popup = document.getElementById("kb-popup");
    const rowsEl = document.getElementById("kb-rows");
    const input = document.getElementById("search-input");

    function getLayout() {
      if (isNums) return layouts[currentLang].nums;
      return isShift ? layouts[currentLang].shift : layouts[currentLang].normal;
    }

    function buildKeyboard() {
      rowsEl.innerHTML = "";
      getLayout().forEach((rowKeys) => {
        const row = document.createElement("div");
        row.className = "kb-row";
        rowKeys.forEach((k) => {
          const btn = document.createElement("button");
          btn.className = "kb-key";
          btn.type = "button";
          btn.dataset.key = k;
          btn.textContent = k;

          if (k === "SHIFT") {
            btn.innerHTML = `<svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5364_162005)"><path d="M13.6579 27.8621C11.2932 27.8621 9.03227 27.8621 6.77137 27.8621C4.51046 27.8621 2.26109 27.8738 0.0117188 27.8505C9.18223 18.5709 18.3412 9.31458 27.5463 0C36.6707 9.20966 45.8297 18.4776 55.0002 27.7339C54.9886 27.7689 54.9656 27.8038 54.954 27.8505C50.4322 27.8505 45.9104 27.8505 41.3309 27.8505C41.2617 28.6432 41.2963 29.3777 41.2963 30.1004C41.2848 30.8232 41.2963 31.5343 41.2963 32.2571C41.2963 32.9916 41.2963 33.7377 41.2963 34.4721C41.2963 35.1949 41.2963 35.906 41.2963 36.6288C41.2963 37.3632 41.2963 38.1093 41.2963 38.8438C41.2963 39.5782 41.2963 40.3243 41.2963 41.0588C41.2963 41.7816 41.2963 42.4927 41.2963 43.2155C41.2963 43.9499 41.2963 44.696 41.2963 45.4304C41.2963 46.1532 41.2963 46.8644 41.2963 47.5871C41.2963 48.3216 41.2963 49.056 41.2963 49.7671C40.8234 49.8837 14.5692 49.9304 13.681 49.8138C13.6694 49.5806 13.6464 49.3358 13.6464 49.091C13.6464 42.2712 13.6464 35.4514 13.6464 28.6316C13.6579 28.4101 13.6579 28.1769 13.6579 27.8621Z" fill="white"/></g><defs><clipPath id="clip0_5364_162005"><rect width="55" height="49.8837" fill="white"/></clipPath></defs></svg>`;
            btn.classList.add("special", "shift-key");
            if (isShift) btn.classList.add("active-shift");
          } else if (k === "BACK") {
            btn.innerHTML = `<svg width="55" height="38" viewBox="0 0 55 38" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5364_161891)"><path d="M54.9824 0.000727591C42.9042 0.000727591 30.8702 0.000727591 18.8274 0.000727591C12.5457 6.16262 6.26404 12.3245 0.0176452 18.4516C0.00882259 18.5299 0 18.5385 0 18.5559C0 18.5733 0.00882259 18.582 0.00882259 18.5994C0.0264678 18.6255 0.0352903 18.6515 0.0529355 18.6689C0.0882259 18.7124 0.132339 18.7558 0.176452 18.7993C1.39397 19.9986 2.61149 21.1893 3.829 22.3886C3.86429 22.4234 3.89076 22.4495 3.92605 22.4756C3.99663 22.5277 4.06721 22.5712 4.12897 22.632C9.04315 27.4642 13.9397 32.2876 18.8186 37.0938C30.8967 37.0938 42.9131 37.0938 54.9118 37.0938C54.9471 37.0677 54.9559 37.059 54.9647 37.0416C54.9735 37.0329 54.9824 37.0155 54.9824 37.0068C54.9912 24.7613 54.9912 12.507 55 0.261456C55 0.183238 54.9912 0.11371 54.9824 0.000727591ZM33.2347 16.8525C33.3317 16.7743 33.42 16.7134 33.4905 16.6439C34.2493 15.8965 35.008 15.1491 35.7668 14.4103C36.6402 13.5499 37.5048 12.6895 38.3871 11.8378C38.837 11.4033 39.3046 10.9861 39.7369 10.5342C40.081 10.1778 40.9456 10.1778 41.3073 10.5429C41.8102 11.0469 41.8367 11.7596 41.3162 12.2724C39.3752 14.1844 37.4342 16.0964 35.4844 18.0171C35.308 18.1909 35.1404 18.3647 34.9639 18.5385C35.0521 18.6341 35.1051 18.7037 35.1668 18.7645C36.8431 20.4158 38.5106 22.0584 40.1869 23.701C40.5927 24.1008 41.0074 24.4919 41.4044 24.9003C41.8279 25.3349 41.7661 25.9954 41.4397 26.4126C41.0868 26.8645 40.4339 26.9775 39.931 26.682C39.781 26.5951 39.6487 26.4734 39.5252 26.3517C37.5489 24.4049 35.5815 22.4582 33.6052 20.5201C33.5082 20.4245 33.3935 20.3289 33.27 20.2246C33.1553 20.3289 33.0494 20.4071 32.9612 20.494C31.5319 21.9106 30.0938 23.3186 28.6646 24.7352C28.0646 25.3262 27.4647 25.9259 26.856 26.5169C26.3972 26.9514 25.7178 26.9601 25.2591 26.5516C24.8444 26.1779 24.6768 25.613 25.0561 25.022C25.1355 24.9003 25.2326 24.7873 25.3385 24.6917C26.2295 23.814 27.1295 22.9449 28.0294 22.0671C29.1234 20.9981 30.2085 19.9204 31.2937 18.8427C31.3819 18.7558 31.4613 18.6428 31.5672 18.5212C31.4349 18.3908 31.3202 18.2604 31.1967 18.1388C29.6262 16.5918 28.0558 15.0448 26.4942 13.5065C26.0707 13.0893 25.6384 12.6721 25.2149 12.2463C24.8356 11.8639 24.7474 11.3859 24.9679 10.934C25.1973 10.4733 25.559 10.2474 26.0972 10.2561C26.4942 10.2648 26.7589 10.456 27.0059 10.708C28.4264 12.1072 29.8556 13.5152 31.2761 14.9144C31.9201 15.5575 32.5642 16.2007 33.2347 16.8525Z" fill="white"/></g><defs><clipPath id="clip0_5364_161891"><rect width="55" height="37.093" fill="white" transform="matrix(1 0 0 -1 0 37.0938)"/></clipPath></defs></svg>`;
            btn.classList.add("special", "backspace-key");
          } else if (k === "ENTER") {
            // ENTER пропускаем — не рендерим кнопку
            return;
          } else if (k === "123") {
            btn.textContent = "123";
            btn.classList.add("special");
            if (isNums) btn.classList.add("active-shift");
          } else if (k === "ABC") {
            btn.textContent = "ABC";
            btn.classList.add("special");
          } else if (k === "LANG") {
            btn.innerHTML = `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5364_161902)"><path d="M18.1132 33.1647C23.1092 33.1647 28.0574 33.1647 33.0294 33.1647C33.0533 33.0213 33.0772 32.8939 33.0932 32.7664C33.133 32.3282 33.1569 31.898 33.1888 31.4598C33.2366 30.8384 33.3003 30.225 33.3322 29.6036C33.4677 27.349 33.4438 25.0944 33.3959 22.8398C33.372 21.8121 33.2605 20.7764 33.1888 19.7487C33.1569 19.3264 33.125 18.9042 33.0932 18.4819C33.0772 18.3306 33.0454 18.1712 33.0215 18.0119C28.0414 18.0119 23.0933 18.0119 18.1212 18.0119C18.0893 18.3067 18.0495 18.5775 18.0336 18.8484C17.9937 19.3344 17.9619 19.8283 17.93 20.3143C17.8822 21.0791 17.8105 21.8439 17.7866 22.6087C17.7467 23.987 17.7148 25.3652 17.7148 26.7435C17.7148 27.6677 17.7945 28.5918 17.8423 29.5159C17.8662 30.0577 17.8981 30.5994 17.9379 31.1412C17.9858 31.7945 18.0495 32.4557 18.1132 33.1647Z" fill="white"/><path d="M50.0235 33.1882C51.5374 28.0894 51.5454 23.0544 50.0235 18.0114C46.151 18.0114 42.3104 18.0114 38.4141 18.0114C38.438 18.2186 38.4698 18.3938 38.4778 18.5691C38.5416 19.549 38.6133 20.521 38.6531 21.5009C38.7009 22.4808 38.7168 23.4607 38.7487 24.4406C38.7647 24.9425 38.7965 25.4445 38.7965 25.9464C38.7886 27.0219 38.7647 28.0974 38.7248 29.1649C38.6929 30.0015 38.6292 30.83 38.5655 31.6586C38.5336 32.0569 38.4778 32.4473 38.438 32.8376C38.43 32.9253 38.438 33.0209 38.438 33.1563C39.7447 33.1882 41.0196 33.1643 42.3025 33.1722C43.5853 33.1802 44.8682 33.1802 46.151 33.1882C47.4259 33.1882 48.7088 33.1882 50.0235 33.1882Z" fill="white"/><path d="M1.14882 33.1647C5.00536 33.1647 8.83798 33.1647 12.6865 33.1647C12.6865 32.8859 12.7025 32.6389 12.6865 32.392C12.6467 31.8423 12.583 31.2846 12.5511 30.7349C12.4873 29.7709 12.4236 28.8069 12.3997 27.8429C12.3758 26.8072 12.3758 25.7716 12.3917 24.7359C12.4077 23.6365 12.4236 22.537 12.4794 21.4376C12.5192 20.5692 12.6228 19.7009 12.6865 18.8325C12.7025 18.5696 12.6865 18.3067 12.6865 18.0199C8.86986 18.0199 5.02926 18.0199 1.14086 18.0199C0.487477 20.0912 0.120947 22.2184 0.0253302 24.3853C-0.102158 27.3649 0.248435 30.2887 1.14882 33.1647Z" fill="white"/><path d="M32.2234 12.586C32.056 11.8531 31.8887 11.1281 31.7214 10.4111C31.4106 9.12045 31.0122 7.8617 30.558 6.61887C30.0003 5.11315 29.3389 3.65522 28.4385 2.3168C27.9684 1.62369 27.4505 0.97041 26.7573 0.476469C26.5103 0.301199 26.2314 0.181699 25.9525 0.070164C25.5939 -0.0812052 25.2434 0.0223622 24.9167 0.173731C24.5342 0.341034 24.2234 0.603939 23.9207 0.890743C23.1159 1.66352 22.5183 2.57971 21.9924 3.55166C20.9725 5.43182 20.2554 7.43149 19.6976 9.49489C19.4426 10.427 19.2354 11.3671 19.0123 12.2992C18.9884 12.3948 18.9884 12.4984 18.9805 12.6019C19.2514 12.6657 31.4505 12.7135 32.0162 12.6577C32.072 12.6497 32.1277 12.6179 32.2234 12.586Z" fill="white"/><path d="M18.957 38.5502C18.9969 38.7494 19.0208 38.9008 19.0526 39.0521C19.5706 41.49 20.2558 43.872 21.2678 46.1585C21.7777 47.3137 22.3753 48.4211 23.1403 49.4249C23.5307 49.9348 23.961 50.3968 24.4948 50.7554C25.3315 51.313 25.8972 51.2891 26.694 50.7394C27.1004 50.4606 27.451 50.118 27.7617 49.7356C28.3593 49.0027 28.8613 48.2139 29.2996 47.3774C30.2238 45.6008 30.8932 43.7207 31.435 41.7927C31.7298 40.7411 31.9927 39.6815 32.1999 38.598C32.1521 38.5741 32.1202 38.5422 32.0804 38.5422C27.7298 38.5502 23.3793 38.5502 18.957 38.5502Z" fill="white"/><path d="M16.9966 1.48906C14.3831 2.39727 12.0644 3.6879 9.9449 5.33702C7.37122 7.34466 5.22782 9.7347 3.5625 12.5709C3.72983 12.7063 3.89716 12.6585 4.04855 12.6585C5.22782 12.6585 6.40709 12.6585 7.59433 12.6585C9.39511 12.6585 11.2039 12.6585 13.0046 12.6585C13.1481 12.6585 13.2915 12.6585 13.4747 12.6585C13.5385 12.3876 13.6022 12.1407 13.65 11.8857C14.0006 10.0852 14.4468 8.30864 14.9966 6.55594C15.3791 5.34499 15.8253 4.15794 16.3114 2.99479C16.4867 2.58051 16.6938 2.18217 16.8851 1.77586C16.9169 1.70416 16.9408 1.63246 16.9966 1.48906Z" fill="white"/><path d="M34.1758 1.56098C35.9288 5.06637 36.9327 8.7789 37.6658 12.6269C37.7773 12.6428 37.9048 12.6667 38.0323 12.6667C40.5263 12.6667 43.0203 12.6667 45.5143 12.6667C46.096 12.6667 46.6856 12.6667 47.2673 12.6667C47.3709 12.6667 47.4665 12.6508 47.6338 12.6348C46.0482 9.95002 44.0721 7.68745 41.7135 5.74355C39.0124 3.51285 35.5543 1.84779 34.1758 1.56098Z" fill="white"/><path d="M47.6336 38.5583C44.2632 38.5583 40.9803 38.5583 37.6656 38.5583C36.9485 42.3824 35.9366 46.1029 34.1836 49.6003C35.1079 49.5206 38.5262 47.7759 40.2951 46.5092C43.2672 44.3741 45.7293 41.7689 47.6336 38.5583Z" fill="white"/><path d="M3.52344 38.5657C6.73456 43.8317 11.1728 47.5283 16.9416 49.6315C16.4157 48.4445 15.8978 47.2654 15.4675 46.0465C15.0452 44.8355 14.6468 43.6166 14.344 42.3658C14.0413 41.1071 13.7544 39.8483 13.4516 38.5577C10.1768 38.5657 6.87798 38.5657 3.52344 38.5657Z" fill="white"/></g><defs><clipPath id="clip0_5364_161902"><rect width="51.1628" height="51.1628" fill="white" transform="matrix(1 0 0 -1 0 51.1628)"/></clipPath></defs></svg>`;
            btn.classList.add("special", "lang-key");
          } else if (k === " ") {
            btn.classList.add("space");
          }

          btn.addEventListener("mousedown", (e) => {
            e.preventDefault();
            handleKey(k, btn);
          });

          row.appendChild(btn);
        });
        rowsEl.appendChild(row);
      });
    }

    function handleKey(k, btn) {
      btn.classList.add("pressed");
      setTimeout(() => btn.classList.remove("pressed"), 150);

      if (k === "SHIFT") {
        isShift = !isShift;
        buildKeyboard();
        return;
      }
      if (k === "123") {
        isNums = true;
        buildKeyboard();
        return;
      }
      if (k === "ABC") {
        isNums = false;
        isShift = false;
        buildKeyboard();
        return;
      }
      if (k === "LANG") {
        currentLang =
          langOrder[(langOrder.indexOf(currentLang) + 1) % langOrder.length];
        isShift = false;
        isNums = false;
        document
          .querySelectorAll(".kb-lang-btn")
          .forEach((b) =>
            b.classList.toggle("active", b.dataset.lang === currentLang),
          );
        buildKeyboard();
        return;
      }
      if (k === "BACK") {
        const s = input.selectionStart,
          e = input.selectionEnd;
        if (s !== e) {
          input.value = input.value.slice(0, s) + input.value.slice(e);
          input.setSelectionRange(s, s);
        } else if (s > 0) {
          input.value = input.value.slice(0, s - 1) + input.value.slice(s);
          input.setSelectionRange(s - 1, s - 1);
        }
        input.dispatchEvent(new Event("input"));
        return;
      }
      if (k === "ENTER") {
        popup.classList.remove("active");
        return;
      }

      const s = input.selectionStart,
        e = input.selectionEnd;
      input.value = input.value.slice(0, s) + k + input.value.slice(e);
      input.setSelectionRange(s + k.length, s + k.length);
      input.dispatchEvent(new Event("input"));

      if (isShift && !isNums) {
        isShift = false;
        buildKeyboard();
      }
    }

    // Открыть по клику на инпут
    input.addEventListener("click", () => {
      input.removeAttribute("readonly");
      popup.classList.add("active");
    });

    // Закрыть при клике вне
    document.addEventListener("mousedown", (e) => {
      if (!popup.contains(e.target) && e.target !== input) {
        popup.classList.remove("active");
      }
    });

    // Кнопки языка
    document.querySelectorAll(".kb-lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentLang = btn.dataset.lang;
        isShift = false;
        isNums = false;
        document
          .querySelectorAll(".kb-lang-btn")
          .forEach((b) =>
            b.classList.toggle("active", b.dataset.lang === currentLang),
          );
        buildKeyboard();
      });
    });

    buildKeyboard();
  })();
}

// (function () {
//   const layouts = {
//     ru: {
//       normal: [
//         ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
//         ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
//         ["SHIFT", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "BACK"],
//         ["123", "LANG", " ", "ENTER"],
//       ],
//       shift: [
//         ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
//         ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
//         ["SHIFT", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "BACK"],
//         ["123", "LANG", " ", "ENTER"],
//       ],
//       nums: [
//         ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
//         ["-", "/", ":", ";", "(", ")", ",", "!", "?", "@"],
//         ["ABC", ".", ",", '"', "'", "_", "&", "%", "=", "BACK"],
//         ["ABC", "LANG", " ", "ENTER"],
//       ],
//     },
//     en: {
//       normal: [
//         ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
//         ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
//         ["SHIFT", "z", "x", "c", "v", "b", "n", "m", ",", ".", "BACK"],
//         ["123", "LANG", " ", "ENTER"],
//       ],
//       shift: [
//         ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
//         ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
//         ["SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "BACK"],
//         ["123", "LANG", " ", "ENTER"],
//       ],
//       nums: [
//         ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
//         ["-", "/", ":", ";", "(", ")", ",", "!", "?", "@"],
//         ["ABC", ".", ",", '"', "'", "_", "&", "%", "=", "BACK"],
//         ["ABC", "LANG", " ", "ENTER"],
//       ],
//     },
//     kk: {
//       normal: [
//         ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
//         ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
//         ["SHIFT", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ң", "BACK"],
//         ["ә", "ғ", "қ", "ү", "ұ", "і", "ө", "һ"],
//         ["123", "LANG", " ", "ENTER"],
//       ],
//       shift: [
//         ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
//         ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
//         ["SHIFT", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "Ң", "BACK"],
//         ["Ә", "Ғ", "Қ", "Ү", "Ұ", "І", "Ө", "Һ"],
//         ["123", "LANG", " ", "ENTER"],
//       ],
//       nums: [
//         ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
//         ["-", "/", ":", ";", "(", ")", ",", "!", "?", "@"],
//         ["ABC", ".", ",", '"', "'", "_", "&", "%", "=", "BACK"],
//         ["ABC", "LANG", " ", "ENTER"],
//       ],
//     },
//   };

//   const langOrder = ["ru", "en", "kk"];
//   const langNames = { ru: "RU", en: "EN", kk: "ҚАЗ" };

//   let currentLang = "ru";
//   let isShift = false;
//   let isNums = false;

//   const popup = document.getElementById("kb-popup");
//   const rowsEl = document.getElementById("kb-rows");
//   // Дай инпуту id="search-input"
//   const input = document.getElementById("search-input");

//   function getLayout() {
//     if (isNums) return layouts[currentLang].nums;
//     return isShift ? layouts[currentLang].shift : layouts[currentLang].normal;
//   }

//   function buildKeyboard() {
//     rowsEl.innerHTML = "";
//     getLayout().forEach((rowKeys) => {
//       const row = document.createElement("div");
//       row.className = "kb-row";
//       rowKeys.forEach((k) => {
//         const btn = document.createElement("button");
//         btn.className = "kb-key";
//         btn.type = "button";
//         btn.dataset.key = k;

//         if (k === "SHIFT") {
//           btn.textContent = "⇧";
//           btn.classList.add("special", "shift-key");
//           if (isShift) btn.classList.add("active-shift");
//         } else if (k === "BACK") {
//           btn.textContent = "⌫";
//           btn.classList.add("special", "backspace-key");
//         } else if (k === "ENTER") {
//           btn.textContent = "Enter ↵";
//           btn.classList.add("special");
//           btn.style.minWidth = "80px";
//         } else if (k === "123") {
//           btn.textContent = "123";
//           btn.classList.add("special");
//           if (isNums) btn.classList.add("active-shift");
//         } else if (k === "ABC") {
//           btn.textContent = "ABC";
//           btn.classList.add("special");
//         } else if (k === "LANG") {
//           btn.textContent = "🌐 " + langNames[currentLang];
//           btn.classList.add("special", "lang-key");
//         } else if (k === " ") {
//           btn.classList.add("space");
//         }

//         btn.addEventListener("mousedown", (e) => {
//           e.preventDefault();
//           handleKey(k, btn);
//         });

//         row.appendChild(btn);
//       });
//       rowsEl.appendChild(row);
//     });
//   }

//   function handleKey(k, btn) {
//     btn.classList.add("pressed");
//     setTimeout(() => btn.classList.remove("pressed"), 150);

//     if (k === "SHIFT") {
//       isShift = !isShift;
//       buildKeyboard();
//       return;
//     }
//     if (k === "123") {
//       isNums = true;
//       buildKeyboard();
//       return;
//     }
//     if (k === "ABC") {
//       isNums = false;
//       isShift = false;
//       buildKeyboard();
//       return;
//     }
//     if (k === "LANG") {
//       currentLang =
//         langOrder[(langOrder.indexOf(currentLang) + 1) % langOrder.length];
//       isShift = false;
//       isNums = false;
//       document
//         .querySelectorAll(".kb-lang-btn")
//         .forEach((b) =>
//           b.classList.toggle("active", b.dataset.lang === currentLang),
//         );
//       buildKeyboard();
//       return;
//     }
//     if (k === "BACK") {
//       const s = input.selectionStart,
//         e = input.selectionEnd;
//       if (s !== e) {
//         input.value = input.value.slice(0, s) + input.value.slice(e);
//         input.setSelectionRange(s, s);
//       } else if (s > 0) {
//         input.value = input.value.slice(0, s - 1) + input.value.slice(s);
//         input.setSelectionRange(s - 1, s - 1);
//       }
//       input.dispatchEvent(new Event("input"));
//       return;
//     }
//     if (k === "ENTER") {
//       popup.classList.remove("active");
//       return;
//     }

//     const s = input.selectionStart,
//       e = input.selectionEnd;
//     input.value = input.value.slice(0, s) + k + input.value.slice(e);
//     input.setSelectionRange(s + k.length, s + k.length);
//     input.dispatchEvent(new Event("input"));

//     if (isShift && !isNums) {
//       isShift = false;
//       buildKeyboard();
//     }
//   }

//   // Открыть/закрыть
//   input.addEventListener("focus", () => popup.classList.add("active"));

//   // Закрыть при клике вне клавиатуры и вне инпута
//   document.addEventListener("mousedown", (e) => {
//     if (!popup.contains(e.target) && e.target !== input) {
//       popup.classList.remove("active");
//     }
//   });

//   // Кнопки языка сверху
//   document.querySelectorAll(".kb-lang-btn").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       currentLang = btn.dataset.lang;
//       isShift = false;
//       isNums = false;
//       document
//         .querySelectorAll(".kb-lang-btn")
//         .forEach((b) =>
//           b.classList.toggle("active", b.dataset.lang === currentLang),
//         );
//       buildKeyboard();
//     });
//   });

//   buildKeyboard();
// })();

//

if (document.querySelector(".spheres-item__show")) {
  document.querySelectorAll(".spheres-item__show").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".spheres-item");
      parent.classList.toggle("spheres-item--shown");
    });
  });
}

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
  $(document).ready(function () {
    var $popup = $(".popup");
    var $popups = {
      search: $(".popup--search"),
    };

    // Функция для показа попапа
    function showPopup($popupToShow) {
      $popupToShow.addClass("popup--active").fadeIn(250, function () {
        $(this).animate({ opacity: 1 }, 250);
      });
      $("body").addClass("body--popup");
    }

    // Функция для скрытия попапа
    function hidePopup($popupToHide) {
      $popupToHide.removeClass("popup--active").fadeOut(250, function () {
        $(this).animate({ opacity: 1 }, 250);
      });
      $("body").removeClass("body--popup");
    }

    // Обработчики кликов для показа попапов
    $(".actions__button--search").click(function (event) {
      event.stopPropagation();
      event.preventDefault();
      showPopup($popups.search);
    });

    // Обработчик кликов для скрытия попапов
    $(".cls").click(function (event) {
      event.stopPropagation();
      event.preventDefault();
      hidePopup($popup);
    });

    // Скрываем попап при клике вне его области
    $(document).click(function (event) {
      $.each($popups, function (key, $popupToCheck) {
        if ($popupToCheck.hasClass("popup--active")) {
          var $popupInner = $popupToCheck.find(".popup__inner");
          if (
            !$popupInner.is(event.target) &&
            $popupInner.has(event.target).length === 0
          ) {
            hidePopup($popupToCheck);
          }
        }
      });
    });
  });
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

new Swiper(".presentation-swiper", {
  slidesPerView: 1,
  loop: true,
  initialSlide: 1,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 750,
  navigation: {
    prevEl: ".presentation-swiper__arrow--left",
    nextEl: ".presentation-swiper__arrow--right",
  },
  pagination: {
    el: ".presentation-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
  // breakpoints: {
  //   301: {
  //     slidesPerView: 1.37,
  //     loop: true,
  //     initialSlide: 1,
  //     centeredSlides: true,
  //     spaceBetween: 30,
  //     speed: 750,
  //   },
  //   1401: {
  //     slidesPerView: 1.88,
  //     loop: true,
  //     initialSlide: 1,
  //     centeredSlides: true,
  //     spaceBetween: 30,
  //     speed: 750,
  //   },
  // },
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
