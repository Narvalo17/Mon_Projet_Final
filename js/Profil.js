/* document.addEventListener('DOMContentLoaded', function() {
    let userData = localStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
        document.getElementById('nom-utilisateur').innerHTML = `Bonjour, ${userData.userApp.nom} <a href="../index.html" id="logout">Se déconnecter</a>`;

        const profilDetails = document.getElementById('profil-details');
        profilDetails.innerHTML = `
            <p><strong>ID:</strong> ${userData.userApp.id}</p>
            <p><strong>Email:</strong> ${userData.userApp.email}</p>
            <p><strong>Nom:</strong> ${userData.userApp.nom}</p>
            <p><strong>Prénom:</strong> ${userData.userApp.prenom}</p>
            <p><strong>Actif:</strong> ${userData.userApp.estActif}</p>
        `;
    } else {
        document.getElementById('nom-utilisateur').textContent = 'Utilisateur non connecté';
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('userData');
    });

    const popup = document.getElementById('profil-popup');
    const btn = document.getElementById('btn-consulter-profil');
    const span = document.getElementsByClassName('close-btn')[0];

    btn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    span.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
    
});
 */
document.addEventListener('DOMContentLoaded', function() {
    let userData = localStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
        document.getElementById('nom-utilisateur').innerHTML = `Bonjour, ${userData.userApp.nom} <a href="../index.html" id="logout">Se déconnecter</a>`;

        const profilDetails = document.getElementById('profil-details');
        profilDetails.innerHTML = `
            <p><strong>ID:</strong> ${userData.userApp.id}</p>
            <p><strong>Email:</strong> ${userData.userApp.email}</p>
            <p><strong>Nom:</strong> ${userData.userApp.nom}</p>
            <p><strong>Prénom:</strong> ${userData.userApp.prenom}</p>
            <p><strong>Actif:</strong> ${userData.userApp.estActif}</p>
        `;

        const demandesDetails = document.getElementById('demandes-details');
        demandesDetails.innerHTML = `<h3>Demandes de service</h3>`;
        
        if (userData.demandes && userData.demandes.length > 0) {
            userData.demandes.forEach(demande => {
                demandesDetails.innerHTML += `
                    <div class="demande">
                        <p><strong>ID:</strong> ${demande.id}</p>
                        <p><strong>Type de Service:</strong> ${demande.typeService}</p>
                        <p><strong>Description:</strong> ${demande.description}</p>
                        <p><strong>Adresse ID:</strong> ${demande.adresseId}</p>
                        <p><strong>Date de Création:</strong> ${demande.dateCreation}</p>
                        <p><strong>Utilisateur ID:</strong> ${demande.utilisateurId}</p>
                    </div>
                `;
            });
        } else {
            demandesDetails.innerHTML += `<p>Aucune demande de service trouvée.</p>`;
        }
    } else {
        document.getElementById('nom-utilisateur').textContent = 'Utilisateur non connecté';
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('userData');
    });

    const popup = document.getElementById('profil-popup');
    const btn = document.getElementById('btn-consulter-profil');
    const span = document.getElementsByClassName('close-btn')[0];

    btn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    span.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

