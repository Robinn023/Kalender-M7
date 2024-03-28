const dates = document.querySelector(".dates");
const navs= document.querySelectorAll("#prev, #next");

const months = [
    "janunari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustes",
    "september",
    "oktober",
    "november",
    "december",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
    const start = new Date(year, month, 1).getDate
    const endDate = new Date(year, month + 1, 0).getDate
    ();
    const end = new Date(year, month, endDate).getDay();
    const endDateprev = new Date(year, month, 0).getDate
    ();

    let datesHtml = '';

    for(let i = start; i > 0; i--){
        datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }

    for()

    datesHtml += "test";

    datesHtml.innerHTML = datesHtml;
    Headers.textContent = `${months[month]} ${year}`;
}

renderCalendar();

