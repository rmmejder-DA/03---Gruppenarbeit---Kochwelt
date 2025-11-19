

//JS Portion berechnen (MAX)

//End

//ich musste deine Klasse hier rausnehmen und in die menu.js packen. Musste die Funktion erweitern

    //  document.getElementById('cook').addEventListener('click', function() {
    //  document.getElementById('menu').classList.toggle('show');
    //  });


     
//Kontaktseite//
function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/movyqvay", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}
//Kontaktseite//