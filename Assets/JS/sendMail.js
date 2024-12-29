function sendMail(contactForm) {
    emailjs.send("service_c6vrakl","Finnbarr",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value            
        })


.then(
    function(response) {
        console.log("SUSSESS", response)
        contactForm.reset();
    },
function(error){
    console.log("FAILED", error);
}
);
return false;
}