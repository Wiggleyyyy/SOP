function sendMail() {
    const nameInput = document.getElementById("mail-name").value;
    const emailInput = document.getElementById("mail-email").value;
    const messageInput = document.getElementById("mail-message").value;

    if (nameInput && emailInput && messageInput) {
        emailjs.init("Edxpg2OxBPnfdYYVC");

        var templateParams = {
            name: `Name: ${nameInput}`,
            email: `Email: ${emailInput}`,
            message: `Message: ${messageInput}`,
        };

        console.log(templateParams);

        emailjs.send("service_s8w819o", "template_6817myw" ,templateParams)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Sent mail");
            }, function(error) {
                console.log("Failed...", error); 
                alert("Couldnt send mail");
            });
    }
    else {
        alert("Name, mail and message needs to be filled.")
    }
}