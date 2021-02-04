const myForm = document.getElementById('booking-form')
const url = 'http://localhost:3000/rdv';
const radioButton = document.getElementById('radio-buttons')

var form = {
    nom : document.getElementById('lname'),
    prenom : document.getElementById('fname'),
    email : document.getElementById('mail'),
    telephone : document.getElementById('pNumber'),
    lieu : document.getElementById('location'),
    type : document.getElementById('type'),
    date : '',
}
var dateJSON = {
    date : document.getElementById('date'),
    hour : document.getElementById('hour'),
    minute : document.getElementById('minute')
};

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    form.date = dateToDateTime();
    prepareAjax();
    //alreadyMeeting()
    console.log(form)
    var res = JSON.parse(alreadyMeeting())
    console.log(res.data)
    
    
    if(res.data.length == 0 || (res.data.length == 1 && res.data[0].lieu != form.lieu)){
        addMeeting()
        alert('Merci! Votre rendez vous à bien été enregistré')
        location.reload()
    }else{
        alert('/!\\ Attention un rendez-vous est déja pris à cet endroit durant ce créneau horaire. Veuille vous référencer au calendrier et reccommencer.')
        location.reload()
    }
   
})
/* radioButton.addEventListener("click", function(){
    var boutons = document.getElementsByName('radio-options');
    var valeur;
    for(var i = 0; i < boutons.length; i++){
        if(boutons[i].checked){
        valeur = boutons[i].value;
    }
    console.log(valeur)
}
});*/
document.addEventListener('DOMContentLoaded', function() {

    calendarRender([]);    

  });

function radioClick(position){
    position === 'middle' ? calendarRender([]) : calendarRender(formatAgenda(position));
}

function dateToDateTime(){
    date = new Date();
    date.setFullYear(dateJSON.date.value.slice(0, 4));
    date.setMonth(dateJSON.date.value.slice(5, 7));
    date.setMonth(date.getMonth() - 1 );
    date.setDate(dateJSON.date.value.slice(8, 10));
    date.setHours(dateJSON.hour.value );
    date.setHours(date.getHours() + 1 );
    date.setMinutes(dateJSON.minute.value);
    date.setSeconds(0);
    console.log(date.toISOString())
    //return date.toISOString()
    return (date.toISOString().slice(0, 19).replace('T', ' '))
}

function prepareAjax(){
    form.nom = form.nom.value.toLowerCase()
    form.prenom = form.prenom.value.toLowerCase()
    form.email = form.email.value.toLowerCase()
    form.telephone = form.telephone.value.toLowerCase()
    form.lieu = form.lieu.value.toLowerCase()
    form.type = form.type.value
}

function addMeeting(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("nice");
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(form));
}

function alreadyMeeting(){
    var res;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url + '/date/' + form.date, false);
   
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
          console.log(xhr.responseText)
          res = xhr.responseText
      } else {
        console.log('error')
      }
    };
    xhr.send();
    return res;
    
}
/*Partie calendrier*/


  function calendarRender(meetingEvents){
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
      weekends: false,
      editable: false,
      selectable: false,
      locale: 'fr',
      initialView: 'timeGridWeek',
      businessHours: {
        daysOfWeek: [ 1, 2, 3, 4, 5],
        startTime: '08:00',
        endTime: '17:00',
      },
      events: meetingEvents
    });

    calendar.render();
  }
  function formatAgenda(city){
    var formattedAnswer = [];
    var res;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url + `/${city}/` , false);
   
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
          console.log(xhr.responseText)
          res = xhr.responseText
      } else {
        console.log('error')
      }
    };
    xhr.send();
    res = JSON.parse(res).data
    let calObj = {}

    for (var element of res) {
        calObj = {
            title : '',
            color : '',
            start: '',
            end: ''
        }
        if(element.type === 'Dépistage'){
            calObj.title = 'Dépistage';
            calObj.color = 'green';
        }else{
            calObj.title = 'Vaccin';
            calObj.color = 'red';
        }
        console.log(element.date);
        var date = new Date(element.date);
        date.setMinutes(date.getMinutes() + 60);
        calObj.start = date.toISOString().slice(0,19);
        date.setMinutes(date.getMinutes() + 30);
        calObj.end = date.toISOString().slice(0,19);
        formattedAnswer.push(calObj)
    }
    return formattedAnswer
  }