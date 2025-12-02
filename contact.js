
//Kontaktseite//
function sendMail(event){
    event.preventDefault();
    
    fetch("https://formspree.io/f/xqavvjjb", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            window.location.href = "./send_mail.html";
        } else {
            console.error("Form submission failed");
        }
    }).catch((error) => {
        console.error("Error:", error);
    });
}
//Kontaktseite//