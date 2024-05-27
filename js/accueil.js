
document.addEventListener('DOMContentLoaded', () => {
    let userData = localStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
        document.getElementById('nom-utilisateur').innerHTML = `Bonjour, ${userData.userApp.nom} <a href="../index.html" id="logout">Se déconnecter</a>`;
    } else {
        document.getElementById('nom-utilisateur').innerHTML = `utilisateur non connecté <a href="../index.html" id="logout">Se déconnecter</a>`;
    }
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('userData');
        window.location.href = '../index.html';
    });
});
