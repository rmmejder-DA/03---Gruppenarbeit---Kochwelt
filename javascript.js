

//JS Portion berechnen (MAX)
          function calculatePortion(input_portion, number) {
            let ab = a * b;
            let input_portion = document.getElementById(input_portion)
            let number = document.getElementById(number);
           let result = Math.abs(ab);
           document.getElementById(porion_result).innerHTML = alert.result;
        }
//End
  
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