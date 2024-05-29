document.addEventListener("DOMContentLoaded", (event) => {
    const token = localStorage.getItem("isLoggedIn");
    if (!token) {
        window.location.replace("./index.html");
    }
});