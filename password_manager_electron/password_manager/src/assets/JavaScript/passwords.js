async function CreateLogin() {
    const site = document.getElementById("site").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error_message");

    errorMessage.textContent = "";

    if (!site || site.trim() === "" || !username || username.trim() === "" || !password || password.trim() === "") {
        console.error("Site, username and password must be filled to create login.");
        alert("Site, username and password must be filled to create login.");
    }
    else {
        const currentUsername = localStorage.getItem("currentUser");
        const apiURL = `https://localhost:7271/password/create_password?site=${site}&username=${username}&password=${password}&currentUsername=${currentUsername}`;

        console.log("url set")

        try {
            const response = await fetch(apiURL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                console.log("Login created");
                // Handle creation
            } else if (response.status === 404) {
                throw new Error("API not found.");
            } else if (response.status === 400) {
                throw new Error("Bad request.");
            } else {
                console.log(`Response : ${response.status}`);
            }

        } catch (error){
            console.error("There was a problem creating login: ", error);
            errorMessage.textContent = `Error: ${error.message}`;
        }
    }
}