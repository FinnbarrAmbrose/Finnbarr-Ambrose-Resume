function sendMail(contactForm) {
    emailjs.send("service_lic63j7","Finnbarr",{
        "from_name": contactForm.name.value,
        "form_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value            
        })


.then(
    function(response) {
        console.log("SUSSESS", response)
    },
function(error){
    console.log("FAILED", error);
}
);
return false;
}