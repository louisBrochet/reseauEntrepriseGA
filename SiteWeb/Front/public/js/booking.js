
const myForm = document.getElementById('booking-form')
var form = {
    nom : document.getElementById('lname'),
    prenom : document.getElementById('fname'),
    email : document.getElementById('mail'),
    telephone : document.getElementById('pNumber'),
    lieu : document.getElementById('location').value,
    type : document.getElementById('type').value,
    date : '',
}
var dateJSON = {
    date : document.getElementById('date'),
    hour : document.getElementById('hour'),
    minute : document.getElementById('minute')
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    form.date = dateToDateTime();
    prepareAjax();
    console.log(form)


    
   
})

function dateToDateTime(){
    date = new Date();
    date.setFullYear(dateJSON.date.value.slice(0, 4));
    date.setMonth(dateJSON.date.value.slice(5, 7));
    date.setMonth(date.getMonth() - 1 );
    date.setDate(dateJSON.date.value.slice(8, 10));
    date.setHours(dateJSON.hour.value );
    date.setHours(date.getHours() + 1 );
    date.setMinutes(dateJSON.minute.value);
    return (date.toISOString().slice(0, 19).replace('T', ' '))
}
function prepareAjax(){
    form.nom = form.nom.value
    form.prenom = form.prenom.value
    form.email = form.email.value
    form.telephone = form.telephone.value
}