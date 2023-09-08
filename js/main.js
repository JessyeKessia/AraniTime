// Estabelecendo as constantes do HTML para mostras os elementos
const time = document.getElementById("time");
const day = document.getElementById("day");
const midday = document.getElementById("midday");

// Função para calcular a hora
function calcTime() {
    let date_now = new Date(); // Pega a data/hora do pc e salva na constante
    let hr = date_now.getHours(); // pega a hora dessa constante e salva numa constante
    let min = date_now.getMinutes(); // pega os minutos dessa constante e salva numa constante
    let sec = date_now.getSeconds(); // pega os segundos da constante e salva numa constante
    let middayValue = "AM"; // estabelece o modo

    // Array com as constantes do dia
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // pega a constante estabelcida pelo HTML que vai mostrar nele e formata de acordo com o array e a outra constante estabelecida pelas data/horas pegas pelo pc
    day.textContent = days[date_now.getDay()];
    middayValue = hr > 12 ? "PM" : "AM"; // Mesma coisa que o if ternário do python

    // formatando a hora se tiver meia noite ser igual a 12 e senão vai diminuir os 12 formatando a hora
    if (hr == 0) {
        hr = 12;
    } else if (hr > 12) {
        hr -= 12;
    }

    // Se hr for menor que 10, um zero é adicionado à esquerda, "01" a "09". Se hr for maior ou igual a 10, fica normal com dois dígitos. igual o "constante:02d" em python
    hr = hr <10 ? "0" + hr : hr; 
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // seta a hora e o modo depois de formatado 
    time.textContent = hr + ":" + min + ":" + sec;
    midday.textContent = middayValue;
}

calcTime(); // Chama a função uma vez para definir o relógio inicial

setInterval(calcTime, 1000); // função que chama a função da hora e vai ficar atualizando ela a cada 1 segundo (1000 miléssimos)