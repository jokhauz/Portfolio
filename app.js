const nv = navigator.onLine;

setInterval(()=>{
    if(nv){
        document.getElementById("statusChecker").innerText = "Online";
        document.getElementById("statusChecker").style.color = "green";
    } else {
        document.getElementById("statusChecker").innerText = "Offline";
        document.getElementById("statusChecker").style.color = "red";
    }
}, 100);

const time = new Date();
let cal = document.getElementById("timer");
if(time.getHours() > 6){
    cal.innerHTML = "<i class='fas fa-moon'></i>";
} else if (time.getHours() < 19){
    cal.innerHTML = "<i class='fas fa-cloud-sun'></i>";
} else {
    console.log("Error:(");
}

let lang = document.getElementById("lang_selector");
function language(){
    if(lang.value == "English"){
        document.getElementById("h").innerHTML = "<i class='fas fa-home'></i>" + "Home";
        document.getElementById("s").innerHTML = "<i class='fas fa-book'></i>" + "Skills";
        document.getElementById("a").innerHTML = "<i class='fas fa-book-open'></i>" + "About";

        document.getElementById("well").innerHTML = "Assalamu Alaikum!" + "<br>" + "Wellcome to my personal website...";
        document.getElementById("bio").innerHTML = "Hello, my name is Jahongir. I'm 16 years old. <br> I know the main part of Front-End and Back-End at the moment. I haven't <br> worked anywhere yet, but with the help of the technologies I know, I can create amazing websites! <br><br> (I wrote this site without any frameworks, so I wrote it in HTML5, Css3, JavaScript)";
    } else if(lang.value == "Russian"){
        document.getElementById("h").innerHTML = "<i class='fas fa-home'></i>" + "Главная";
        document.getElementById("s").innerHTML = "<i class='fas fa-book'></i>" + "Языки";
        document.getElementById("a").innerHTML = "<i class='fas fa-book-open'></i>" + "Био";

        document.getElementById("well").innerHTML = "Ассаламу Алаикум!" + "<br>" + "Добро пожаловать на мой личный сайт...";
        document.getElementById("bio").innerHTML = "Привет! Меня зовут Jahongir, мне 16 лет. <br> Я знаю основную часть Фронтенда и Бэкенда на данный момент, <br> я еще нигде не работал, но с помощью технологий которые знаю, я могу <br> создавать удивительные веб программы. <br><br> (А этот сайт я писал вообще без фреймворка, поэтому я писал его на HTML5, Css3, JavaScript)"
    } else if(lang.value == "Uzbek"){
        document.getElementById("h").innerHTML = "<i class='fas fa-home'></i>" + "Bosh Sahifa";
        document.getElementById("s").innerHTML = "<i class='fas fa-book'></i>" + "Dasturlar";
        document.getElementById("a").innerHTML = "<i class='fas fa-book-open'></i>" + "Biz Haqimizda";

        document.getElementById("well").innerHTML = "Assalamu alaikum!" + "<br>" + "Mening shaxsiy websaytimga xush kelibsiz...";
        document.getElementById("bio").innerHTML = "Salom, Mening ismim Jahongir, 16 yoshdaman. <br> Men hozirda Front-End va Back-End ning asosiy qismini bilaman, <br> Hozircha hech qayerda ishlaganim yo'q, ammo biladigan texnologiyalarim yordamida ajoyib web dasturlar yarata olaman. <br><br> (Bu saytni frameworklarsiz, HTML5, Css3, JavaScript da yozdim)"
    }
}

function magic(){
    let elements = document.getElementsByClassName("magicbox");
    for(let i = 0; i < elements.length; i++){
        let scrollH = window.innerHeight / 1;
        let ptn = elements[i].getBoundingClientRect().top;

        if(ptn < scrollH){
            elements[i].classList.add("active");
        } else {
            elements[i].classList.remove("active");
        }
    }
}

function menu(){
    document.getElementById("nav").classList.toggle("active");
}

window.addEventListener("scroll", magic);
document.getElementById("menu").addEventListener("click", menu);