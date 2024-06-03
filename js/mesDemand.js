import { BASE_URL, PORT, GET_ALL_DEMANDE_ENDPOINT } from "./constantes.js";

document.addEventListener('DOMContentLoaded', () => {
    const btnConsulterDemandes = document.getElementById('consulte');
    const popup = document.getElementById('profil-popup');
    const closeBtn = document.querySelector('.close-btn');
    const demandesDetails = document.getElementById('demandes-details');

    btnConsulterDemandes.addEventListener('click', async function() {
        try {
                const userData = JSON.parse(localStorage.getItem('userData'));
                const userId = userData.userApp.id;
            
            if (!userId) {
                throw new Error('ID utilisateur non trouvé dans le localStorage.');
            }

            const url = `${BASE_URL}${PORT}${GET_ALL_DEMANDE_ENDPOINT.replace('{id}', userId)}`;

            console.log(`URL de la requête: ${url}`);

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const demandes = await response.json();

            if (!demandes || demandes.length === 0) {
                console.log('Aucune demande trouvée pour cet utilisateur.');
                demandesDetails.innerHTML = '<p>Aucune demande trouvée.</p>';
                popup.style.display = 'block';
                return;
            }

            demandesDetails.innerHTML = demandes.map(demande => `
                <div class="demande">
                    <p><strong>ID Demande:</strong> ${demande.id}</p>
                    <p><strong>Adresse ID:</strong> ${demande.adresse.id}</p>
                    <p><strong>Date de Création:</strong> ${demande.dateCreation}</p>
                    <p><strong>Utilisateur ID:</strong> ${demande.utilisateur.id}</p>
                    <p><strong>Description:</strong> ${demande.description}</p>
                    <p><strong>Type de Service:</strong> ${demande.typeService}</p>
                    <p><strong>Code Postal:</strong> ${demande.adresse.codePostal}</p>
                    <p><strong>Rue:</strong> ${demande.adresse.rue}</p>
                    <p><strong>Ville:</strong> ${demande.adresse.ville}</p>
                </div>
            `).join('');

            popup.style.display = 'block';
        } catch (error) {
            console.error('Erreur lors de la récupération des demandes de devis:', error.message);
            alert(`Erreur: ${error.message}`);
        }
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});

/* import { BASE_URL, PORT, GET_ALL_DEMANDE_ENDPOINT } from "./constantes.js";

document.addEventListener('DOMContentLoaded', () => {
    const btnConsulterDemandes = document.getElementById('consulte');
    const popup = document.getElementById('profil-popup');
    const closeBtn = document.querySelector('.close-btn');
    const demandesDetails = document.getElementById('demandes-details');

    btnConsulterDemandes.addEventListener('click', async function() {
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const userId = userData.userApp.id;

            if (!userId) {
                throw new Error('ID utilisateur non trouvé dans le localStorage.');
            }

            const url = `${BASE_URL}${PORT}${GET_ALL_DEMANDE_ENDPOINT.replace('{id}', userId)}`;

            console.log(`URL de la requête: ${url}`);

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const demandes = await response.json();

            if (!demandes || demandes.length === 0) {
                console.log('Aucune demande trouvée pour cet utilisateur.');
                demandesDetails.innerHTML = '<p>Aucune demande trouvée.</p>';
                popup.style.display = 'block';
                return;
            }

            demandesDetails.innerHTML = demandes.map(demande => `
                <div class="demande">
                    <p><strong>ID Demande:</strong> ${demande.id}</p>
                    <p><strong>Adresse ID:</strong> ${demande.adresse.id}</p>
                    <p><strong>Date de Création:</strong> ${demande.dateCreation}</p>
                    <p><strong>Utilisateur ID:</strong> ${demande.utilisateur.id}</p>
                    <p><strong>Description:</strong> ${demande.description}</p>
                    <p><strong>Type de Service:</strong> ${demande.typeService}</p>
                    <p><strong>Code Postal:</strong> ${demande.adresse.codePostal}</p>
                    <p><strong>Rue:</strong> ${demande.adresse.rue}</p>
                    <p><strong>Ville:</strong> ${demande.adresse.ville}</p>
                </div>
            `).join('');

            popup.style.display = 'block';
        } catch (error) {
            console.error('Erreur lors de la récupération des demandes de devis:', error.message);
            alert(`Erreur: ${error.message}`);
        }
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
}); */