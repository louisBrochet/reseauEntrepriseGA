const myForm = document.getElementById('booking-form')

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1
    let day = now.getDate();
    if(month <10){
        month = `0${month}`;
    }
    if(month <10){
        day = `0${day}`;
    }
    dateNow = `${year}-${month}-${day}`;

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: dateNow,
      initialView: 'timeGridWeek',
      events: [
        {
          title: 'Dépistage',
          start: '2021-02-03T08:00:00',
          end: '2021-02-03T08:30:00'
        },
        {
          title: 'Vaccin',
          start: '2021-02-03T09:00:00',
          end: '2021-02-03T09:30:00'
        }
      ]
    });

    calendar.render();
  });
