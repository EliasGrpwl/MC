function fadeIn(elem, ms, block) {
    block == null ? block = 'block' : true;
    if (!elem)
        return;
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = block;
    elem.style.visibility = "visible";

    if (ms) {
        var opacity = 0;
        var timer = setInterval(function () {
            opacity += 50 / ms;
            if (opacity >= 1) {
                clearInterval(timer);
                opacity = 1;
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    } else {
        elem.style.opacity = 1;
        elem.style.filter = "alpha(opacity=1)";
    }
}

function fadeOut(elem, ms) {
    if (!elem)
        return;

    if (ms) {
        var opacity = 1;
        var timer = setInterval(function () {
            opacity -= 50 / ms;
            if (opacity <= 0) {
                clearInterval(timer);
                opacity = 0;
                elem.style.display = "none";
                elem.style.visibility = "hidden";
            }
            elem.style.opacity = opacity;
            elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    } else {
        elem.style.opacity = 0;
        elem.style.filter = "alpha(opacity=0)";
        elem.style.display = "none";
        elem.style.visibility = "hidden";
    }
}
const rangeInput = document.querySelector('#range');
const rangeOutput = document.querySelector('.profit');

ionRangeSlider(rangeInput, {
    skin: 'round',
    min: 250,
    max: 50000,
    prefix: "$",
    grid: true,
    grid_num: 5,
    step: 10,
});

rangeInput.addEventListener('change', () => {
    rangeOutput.value = `$${rangeInput.value * 3}`
});


const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;


function spotsLeft() {
    let number = parseInt('43');
    const interval = setInterval(function () {
        document.querySelector('.spotsLeft').textContent = number--;
        if (number == 0) {
            clearInterval(interval);
        }
    }, 18000);
}

spotsLeft();

const spanishNames = ["Alejandro", "Serhio", "Mateo", "Valentina", "Gabriel", "Lucía", "Hugo", "Isabella", "Daniel", "Mía", "Pablo", "Camila", "Adrián", "Emma", "Javier", "Valeria", "Carlos", "Martina", "Diego", "Laura"];
const americanNames = ["Liam", "Olivia", "Noah", "Emma", "Aiden", "Ava", "Jackson", "Sophia", "Caden", "Isabella", "Mason", "Mia", "Elijah", "Charlotte", "James", "Amelia", "Benjamin", "Harper", "Lucas", "Evelyn"];
const italianNames = ["Lorenzo", "Giulia", "Francesco", "Sofia", "Alessandro", "Emma", "Leonardo", "Aurora", "Gabriele", "Alice", "Matteo", "Giorgia", "Tommaso", "Greta", "Riccardo", "Beatrice", "Davide", "Marta", "Samuele", "Camilla"];
const portugueseNames = ["Miguel", "Sofia", "Davi", "Alice", "Arthur", "Lara", "Pedro", "Matilde", "Gabriel", "Maria", "Bernardo", "Francisca", "Lucas", "Carolina", "Matheus", "Beatriz", "Rafael", "Mariana", "Gustavo", "Laura"];
const chineseNames = ["Li Wei", "Zhang Jing", "Wang Wei", "Chen Li", "Liu Yan", "Yang Xin", "Zhao Jing", "Huang Lei", "Wu Mei", "Xu Wei", "Sun Li", "Gao Ming", "Guo Yan", "Lin Fang", "He Yuan", "Lu Na", "Fu Cheng", "Jiang Tao", "Zhou Xia", "Xie Xin"];

const countryFlags = [
    "cn", // Китай
    "de", // германия
    "id", // Индонезия
    "gb", // Великобритания
    "br", // Бразилия
    "ng", // Нигерия
    "bd", // Бангладеш
    "ru", // Россия
    "mx", // Мексика
    "jp", // Япония
    "et", // Эфиопия
    "ph", // Филиппины
    "eg", // Египет
    "vn", // Вьетнам
    "cd", // Демократическая Республика Конго
];

function generateRandomNameWithInitial() {
    const allNames = spanishNames.concat(americanNames, italianNames, portugueseNames, chineseNames);
    const randomName = allNames[Math.floor(Math.random() * allNames.length)];
    const initials = randomName.split(' ').map(function (name) {
        return name.charAt(0).toUpperCase();
    }).join('. ');

    return randomName + ' ' + initials + '.';
}

function generateRandomSum() {
    const minSum = 10;
    const maxSum = 1000;
    return Math.floor(Math.random() * (maxSum - minSum + 1)) + minSum + ' USDT';
}

function generateRandomCountryFlag() {
    const randomFlagIndex = Math.floor(Math.random() * countryFlags.length);
    return countryFlags[randomFlagIndex];
}

function getCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds;
}


function generateUserRow() {
    const userRow = document.createElement('div');
    userRow.className = 'user-row';

    const userFlag = document.createElement('div');
    userFlag.className = 'user-flag ' + generateRandomCountryFlag();
    userRow.appendChild(userFlag);

    const userName = document.createElement('div');
    userName.className = 'user-name';
    userName.textContent = generateRandomNameWithInitial();
    userRow.appendChild(userName);

    const userSum = document.createElement('div');
    userSum.className = 'user-sum';
    userSum.textContent = generateRandomSum();
    userRow.appendChild(userSum);

    const userCur = document.createElement('div');
    userCur.className = 'user-cur';
    userCur.textContent = 'usdt';
    userRow.appendChild(userCur);

    const userTime = document.createElement('div');
    userTime.className = 'user-time';
    userTime.textContent = getCurrentTime();
    userRow.appendChild(userTime);

    return userRow;
}

function generateUserRowPeriodically() {
    const minDelay = 2000;
    const maxDelay = 8000;

    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    setInterval(function () {
        const userRow = generateUserRow();
        document.querySelector('.table__live').prepend(userRow);
    }, delay);
}

generateUserRowPeriodically();

document.querySelectorAll('.faq__item').forEach(function (e) {
    e.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        } else {
            document.querySelectorAll('.faq__item').forEach(function (el) {
                el.classList.remove('active');
            });
            e.classList.add('active');
        }
    })
});

const infoWindow = document.querySelector('.info-window');
const notify = document.querySelector('.info-msg span');

document.querySelector('.info-window .close').addEventListener('click', (e) => {
    e.preventDefault();
    const infobox = document.querySelector('.infobox');
    infoWindow.style.display = 'none';
    infobox.classList.add('transformed');
    infobox.classList.add('transformed');
    setTimeout(() => {
        infobox.classList.remove('transformed');
        // document.querySelector('.info-msg').classList.remove('transformed');
        notify.style.display = 'flex';
    }, 5000);
});

document.querySelector('.info-msg').addEventListener('click', function (e) {
    e.preventDefault();
    fadeIn(infoWindow, 500, 'block');
    notify.style.display = 'none';
});

document.querySelector('.testimonials__btn').addEventListener('click', (e) => {
    e.preventDefault();
    fadeIn(document.querySelector('.register-msg'), 300, 'block');
});

document.querySelector('.register-wrapper .close').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.testimonials__comment textarea').value = '';
    fadeOut(document.querySelector('.register-msg'), 300);
});