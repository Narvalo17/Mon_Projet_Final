/* import { BASE_URL,PORT, PRO_ENDPOINT, USER_ENDPOINT } from "./constantes.js"

document.getElementById('userInput').addEventListener('change', function() {
    let user = this.value;
    if (user === 'Professionnel') {
        document.getElementById('professionnelleForm').style.display = 'block';
    } else {
        document.getElementById('professionnelleForm').style.display = 'none';
    }
});

document.getElementById('inscriptionForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    let userType = document.getElementById('userInput').value;
    let nom, prenom, email, password, confirmation, raison, siret;
    
    (userType === 'Client')
        nom = document.getElementById('nom').value;
        prenom = document.getElementById('prenom').value;
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;
        confirmation = document.getElementById('confirmation').value;
        
    if (userType === 'Professionnel') {
        raison = document.getElementById('raison').value;
        siret = document.getElementById('siret').value;
    }

    if(password!== confirmation){
        console.log("erreur mot de passe pas conforme");
    }

    let formData = {
        nom: nom,
        prenom: prenom,
        email: email,
        motDePasse: password,
        raisonSociale: raison,
        siret: siret
    };

    console.log(formData);
    try {
        
        const response = await axios.post(`${BASE_URL}${PORT}${userType === "Client" ? USER_ENDPOINT : PRO_ENDPOINT}`, {
            ...formData
        });
    
        console.log('Réponse du serveur :', response.data);
        console.log("utilisateur ajouter avec succées ")
      } catch (error) {
        console.error('Erreur lors de la requête :', error);
      }
    });

 */

    import { BASE_URL, PORT, PRO_ENDPOINT, USER_ENDPOINT } from "./constantes.js";

const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.(com|fr|net)$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+*/=])[A-Za-z\d\-+*/=]{8,}$/;


document.getElementById('userInput').addEventListener('change', function() {
    let user = this.value;
    if (user === 'Professionnel') {
        document.getElementById('professionnelleForm').style.display = 'block';
    } else {
        document.getElementById('professionnelleForm').style.display = 'none';
    }
});

document.getElementById('inscriptionForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    let userType = document.getElementById('userInput').value;
    let nom, prenom, email, password, confirmation, raison, siret;
    
    if (userType === 'Client') {
        nom = document.getElementById('nom').value;
        prenom = document.getElementById('prenom').value;
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;
        confirmation = document.getElementById('confirmation').value;
    } else {
        raison = document.getElementById('raison').value;
        siret = document.getElementById('siret').value;
        nom = prenom = email = password = confirmation = null; // Reset des valeurs pour le cas où
    }

    if (password !== confirmation) {
        console.log("Erreur: Le mot de passe et sa confirmation ne correspondent pas.");
        return; 
    }

    if (!regexEmail.test(email)) {
        console.log("Erreur: L'adresse e-mail n'est pas valide.");
        return; 
    }

    if (!regexPassword.test(password)) {
        console.log("Erreur: Le mot de passe n'est pas conforme.");
        return; 
    }

    let formData = {
        nom: nom,
        prenom: prenom,
        email: email,
        motDePasse: password,
        raisonSociale: raison,
        siret: siret
    };

    console.log(formData);
    try {
        const response = await axios.post(`${BASE_URL}${PORT}${userType === "Client" ? USER_ENDPOINT : PRO_ENDPOINT}`, {
            ...formData
        });
    
        console.log('Réponse du serveur :', response.data);
        console.log("Utilisateur ajouté avec succès.");
    } catch (error) {
        console.error('Erreur lors de la requête :', error);
    }
});
