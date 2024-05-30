document.addEventListener("DOMContentLoaded", (event) => {
    const token = localStorage.getItem("isLoggedIn");
    if (!token) {
        window.location.replace("./index.html");
    }

    const username = document.getElementById("user");
    username.textContent = localStorage.getItem("currentUser");
});

function Logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.replace("./index.html");
}