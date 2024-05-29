async function Login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error_message");

    errorMessage.textContent = "";

    document.getElementById("password").classList.remove("error")
    document.getElementById("username").classList.remove("error")
    document.getElementById("bar").classList.remove("error")
    document.getElementById("highlight").classList.remove("error")

    const apiURL = `https://localhost:7271/Login?username=${username}&password=${password}`;

    const user = {
        username: username,
        password: password
    }

    try {
        const response = await fetch(apiURL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const responseBody = await response.text();

        if (response.status === 200) {
            console.log("Logged in");
            localStorage.setItem("isLoggedIn", "true");
            window.location.assign("./home.html")
        } else if (response.status === 404) {
            throw new Error("API not found.");
        } else if (response.status === 400) {
            throw new Error("Bad request.");
        } else {
            console.log(`Response: ${response.status}`);
        }


    } catch (error) {
        console.error("There was a problem logging in: ", error);
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

async function Signup() {
    const username = document.getElementById("username").value;
    const password =  document.getElementById("password").value; 
    const repeatedPassword = document.getElementById("repeated_password").value;
    const errorMessage = document.getElementById("error_message");

    errorMessage.textContent = "";

    document.getElementById("password").classList.remove("error");
    document.getElementById("repeated_password").classList.remove("error");
    document.getElementById("highlight").classList.remove("error");
    document.getElementById("bar").classList.remove("error");

    if ( password === repeatedPassword) {
        const apiURL = `https://localhost:7271/api/Signup/create_user?username=${username}&password=${password}`;

        const user = {
            username: username,
            password: password
        }

        try{
            const response = await fetch(apiURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const responseBody = await response.text();
            
            if (response.status === 200) {
                console.log("Account created, logging in");
                localStorage.setItem("isLoggedIn", "true");
                window.location.assign("./home.html");
            } else if (response.status == 404) {
                throw new Error("API not found.");
            } else if (response.status === 400) {
                throw new Error("Bad request");
            } else {
                console.log(`Response code: ${response.status}`)
            }
            
        } catch (error) {
            console.error("There was a problem creating the user: ", error)
            errorMessage.textContent = `Error: ${error.message}`;
        }

    } else {
        errorMessage.textContent = "The entered password do not match!";

        document.getElementById("password").classList.add("error");
        document.getElementById("repeated_password").classList.add("error");
        document.getElementById("highlight").classList.add("error");
        document.getElementById("bar").classList.add("error");
    }
}