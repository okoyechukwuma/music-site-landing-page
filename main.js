const display = document.querySelector(".click-me");
const remove = document.querySelector(".main-contact");
const removeRemove = document.querySelector(".back-contact");
const menuDisplay = document.querySelector(".menu");
const nav = document.querySelector(".navbar");
const menuRemove = document.querySelector(".return");


menuDisplay.addEventListener('click', () => {
    nav.classList.add("navbar-add");
    menuDisplay.classList.add("menu-remove");
    menuRemove.classList.add("return-display");
});


menuRemove.addEventListener('click', () => {
    nav.classList.remove("navbar-add");
    menuDisplay.classList.remove("menu-remove");
    menuRemove.classList.remove("return-display");
});


display.addEventListener('click', () => {
    display.classList.add("remove");
    remove.classList.add("add");
});

removeRemove.addEventListener('click', () => {
    display.classList.remove("remove");
    remove.classList.remove("add");
});

let x = new Date().getHours();
if (x < 12) {
    document.querySelector(".demo").innerHTML = "Good Morning Guest :)";
}else if (x < 16) {
    document.querySelector(".demo").innerHTML = "Good Afternoon Guest :)";
}else if (x < 18.30) {
    document.querySelector(".demo").innerHTML = "Good Evening Guest :)";
}else{
     document.querySelector(".demo").innerHTML = "Good Night Guest :)";
}

let day = new Date().getDay();
switch (day) {
    case 0:
        document.querySelector(".demo1").innerHTML = "Today is Sunday"
        break;
     case 1:
        document.querySelector(".demo1").innerHTML = "Today is Monday"
        break;
    case 2:
        document.querySelector(".demo1").innerHTML = "Today is Tuesday"
        break;
    case 3:
        document.querySelector(".demo1").innerHTML = "Today is Wednessday"
        break;
    case 4:
        document.querySelector(".demo1").innerHTML = "Today is Thursday"
        break;
    case 5:
        document.querySelector(".demo1").innerHTML = "Today is Friday"
        break;
    case 6:
        document.querySelector(".demo1").innerHTML = "Today is Saturday"
        break;
}


