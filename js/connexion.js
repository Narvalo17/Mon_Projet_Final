/* import { BASE_URL,PORT, LOGIN, USER_ENDPOINT } from "./constantes.js"

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    let  email, password;

        email = document.getElementById('email').value;
        password = document.getElementById('password').value;

    let formData = {
        email: email,
        motDePasse: password,
    };

    console.log(formData);
    
        const response = await axios.post(`${BASE_URL}${PORT}${USER_ENDPOINT}${LOGIN}`, {
            ...formData
        }).then(function(response){
            console.log(response);
          
            localStorage.setItem('userData', JSON.stringify(response.data));
            console.log('Données utilisateur stockées dans le localStorage'); 

          window.location.href='../aprescnx/accueil.html';
        })
          .catch(function(response){
            console.log(response);
          });
      })

      let userData = localStorage.getItem('userData');
      if (userData) {
          userData = JSON.parse(userData);
          document.getElementById('nom-utilisateur').innerHTML = `Bonjour, ${JSON.stringify(userData.userApp.nom)} <a href="../index.html" id="logout">Se déconnecter</a>`;
      } else {
          document.getElementById('nom-utilisateur').textContent = `${userData.message}`;
      }
      document.getElementById('logout').addEventListener('click', function() {
          localStorage.removeItem('userData');
      }); */
      import { BASE_URL, PORT, LOGIN, USER_ENDPOINT } from "./constantes.js";

const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.(com|fr|net)$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+*/=])[A-Za-z\d\-+*/=]{8,}$/;

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!regexEmail.test(email)) {
        console.alert("Erreur: L'adresse e-mail n'est pas valide.");
        return; 
    }

    if (!regexPassword.test(password)) {
        console.alert("Erreur: Le mot de passe n'est pas conforme.");
        return; 
    }

    let formData = {
        email: email,
        motDePasse: password,
    };

    console.log(formData);
    
    try {
        const response = await axios.post(`${BASE_URL}${PORT}${USER_ENDPOINT}${LOGIN}`, {
            ...formData
        });

        console.log(response);
        localStorage.setItem('userData', JSON.stringify(response.data));
        console.log('Données utilisateur stockées dans le localStorage'); 

        window.location.href = '../aprescnx/accueil.html';
    } catch (error) {
        console.log(error);
    }
});

let userData = localStorage.getItem('userData');
if (userData) {
    userData = JSON.parse(userData);
    document.getElementById('nom-utilisateur').innerHTML = `Bonjour, ${JSON.stringify(userData.userApp.nom)} <a href="../index.html" id="logout">Se déconnecter</a>`;
} else {
    document.getElementById('nom-utilisateur').textContent = "Message d'erreur approprié en cas d'absence de données utilisateur";
}

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('userData');
}); 
