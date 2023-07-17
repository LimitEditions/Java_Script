let question = prompt("Введите Ваше имя");
alert("Меня зовут " + question);

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