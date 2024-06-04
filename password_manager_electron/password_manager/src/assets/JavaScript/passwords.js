let counter = 1;

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

        try {
            const response = await fetch(apiURL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                console.log("Login created");

                const passwordList = document.getElementById("passwords");
                const newListItem = document.createElement("li");
                const siteId = `li_site${counter}`;
                const usernameId = `li_username${counter}`;
                const passwordId = `li_password${counter}`;
                newListItem.innerHTML = `<p>Site: <span id="${siteId}">${site}</span></p>
                                         <p>Username: <span class="masked" id="${usernameId}">${username}</span></p>
                                         <p>Password: <span class="masked" id="${passwordId}">${password}</span></p>
                                         <button onclick="deleteLogin(this, '${siteId}', '${usernameId}', '${passwordId}')"><i class="fa-solid fa-trash"></i></button>`;
                                         
                passwordList.appendChild(newListItem);
                counter++;

                document.getElementById("site").value = "";
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
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

async function deleteLogin(button, siteId, usernameId, passwordId) {
    const listItem = button.parentElement;
    
    const user = localStorage.getItem("currentUser");

    const site = document.getElementById(siteId).textContent;
    const username = document.getElementById(usernameId).textContent;
    const password = document.getElementById(passwordId).textContent;

    const apiURL = `https://localhost:7271/password/delete_password?user=${user}&site=${site}&username=${username}&password=${password}`;

    try {
        const response = await fetch( apiURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status === 200) {
            console.log("Login deleted")
            listItem.remove();
        } else if (response.status === 404) {
            throw new Error("API not found.")
        } else if (response.status === 400) {
            throw new Error("Bad request.")
        } else {
            console.log(`Response: ${response.status}`);
        }
    } catch (error) {

    }
}

window.onload = async function() {
    //Get passwords
    const username = localStorage.getItem("currentUser");

    if (username) {
        const apiURL = `https://localhost:7271/password/get_password?username=${username}`;

        try {
            const response = await fetch(apiURL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            if (response.status === 200) {
                const data = await response.json();
                data.forEach(x => {
                    const passwordList = document.getElementById("passwords");
                    const newListItem = document.createElement("li");
                    const siteId = `li_site${counter}`;
                    const usernameId = `li_username${counter}`;
                    const passwordId = `li_password${counter}`;
                    newListItem.innerHTML = `<p>Site: <span id="${siteId}">${x.site}</span></p>
                                             <p>Username: <span class="masked" id="${usernameId}">${x.username}</span></p>
                                             <p>Password: <span class="masked" id="${passwordId}">${x.password}</span></p>
                                             <button onclick="deleteLogin(this, '${siteId}', '${usernameId}', '${passwordId}')"><i class="fa-solid fa-trash"></i></button>`;
                                             
                    passwordList.appendChild(newListItem);
                    counter++;
                })

            } else if (response.status === 404) {
                throw new Error("API not found.");
            } else if (response.status === 400) {
                throw new Error("Bad request.");
            } else {
                console.log(`Response : ${response.status}`);
            }
        } catch (error) {
            console.error("Error occured getting log-ins.")
        }
    } else {
        console.error("Can't fetch username.");
    }
};