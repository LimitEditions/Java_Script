let question = prompt("Введите Ваше имя");
function out(){
    let answer = "Меня зовут " + question;
    alert(answer);
}

out();

let age = parseInt(prompt("Введите Ваш возраст"));
switch(age) {
    case 18: {
        alert("Вы совершеннолетний, все можно!");
        break;
    }
    case 10:{
        alert("Вам надо учить уроки!");
        break;
    }
    case 30: {
        alert("Ложись спать, завтра на работу!");
        break;
    }
    default:{
        alert("Мы не знаем, что Вам делать!");
        break;
    }
}


function changedColor (){
    let element = document.getElementById("el");
    let check = document.getElementById("li");
    console.log(element);
    element.classList.toggle("color");
    element.textContent =  element.textContent == "Какой чудесный день!" 
    ? "Работать мне не лень))" : "Какой чудесный день!";
    check.classList.toggle("change");
    console.log(check);
}


let button = document.getElementById("btn");
console.log(button);
button.addEventListener('click', changedColor);
