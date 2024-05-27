import { BASE_URL,PORT, LOGIN, USER_ENDPOINT } from "./constantes.js"

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
      });