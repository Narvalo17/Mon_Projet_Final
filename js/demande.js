import { BASE_URL, PORT, DEMANDE_ENDPOINT } from "./constantes.js";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('demandeService').addEventListener('submit', async (event) => {
        event.preventDefault();

        const service = document.getElementById('demande').value;
        const description = document.getElementById('description').value;
        const rue = document.getElementById('rue').value;
        const codPostal = document.getElementById('codPostal').value;
        const ville = document.getElementById('ville').value;
        const image = document.getElementById('image').files[0];

        const imagePath = image ? image.name : "";

    const data = {
            typeService: service,
            description: description,
            rue: rue,
            cp: codPostal,
            ville: ville,
            imagesUrl: [imagePath],
            dateCreation: new Date().toISOString(), 
            adresseId: Math.floor(Math.random() * 10000), 
            utilisateurId: JSON.parse(localStorage.getItem('userData')).userApp.id
        };

        try {
            const userId = 1; 
            const response = await axios.post(`${BASE_URL}${PORT}${DEMANDE_ENDPOINT}/${userId}`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Réponse du serveur :', response.data);
            
            const userData = JSON.parse(localStorage.getItem('userData')) || {};
            userData.lastDemande = response.data;
            localStorage.setItem('userData', JSON.stringify(userData));
            
            console.log("Demande envoyée avec succès !");
            
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
            alert("Erreur lors de la tentative d'envoi de la demande. Veuillez réessayer.");
        }
    });
});

