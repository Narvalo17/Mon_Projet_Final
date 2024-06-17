      import { BASE_URL, PORT, LOGIN, USER_ENDPOINT } from "./constantes.js";

      const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.(com|fr|net)$/;
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+*/=])[A-Za-z\d\-+*/=]{12,}$/;
      
      document.getElementById('loginForm').addEventListener('submit', async function(event) {
          event.preventDefault(); 
      
          let email = document.getElementById('email').value;
          let password = document.getElementById('password').value;
      
          if (!regexEmail.test(email)) {
              alert("Erreur: L'adresse e-mail n'est pas valide.");
              return; 
          }
      
          if (!regexPassword.test(password)) {
              alert("Erreur: Le mot de passe n'est pas conforme.");
              return; 
          }
      
          let formData = {
              email: email,
              motDePasse: password,
          };
      
          console.log(formData);
          
          try {
              const response = await axios.post(`${BASE_URL}${PORT}${USER_ENDPOINT}${LOGIN}`, formData);
      
              console.log(response);
      
              if (response.data && response.data.userApp) {
                  localStorage.setItem('userData', JSON.stringify(response.data));
                  console.log('Données utilisateur stockées dans le localStorage'); 
                  window.location.href = '../aprescnx/accueil.html';
              } else {
                  throw new Error("Utilisateur non trouvé");
              }
          } catch (error) {
              console.error('Erreur lors de la tentative de connexion:', error.message);
              alert("Erreur: Utilisateur non trouvé ou informations d'identification incorrectes.");
          }
      });
      
      let userData = localStorage.getItem('userData');
      if (userData) {
          userData = JSON.parse(userData);
          document.getElementById('nom-utilisateur').innerHTML = `Bonjour, ${userData.userApp.nom} <a href="../index.html" id="logout">Se déconnecter</a>`;
      } else {
          document.getElementById('nom-utilisateur').textContent = "Utilisateur non connecté";
      }
      
      document.getElementById('logout').addEventListener('click', function() {
          localStorage.removeItem('userData');
          window.location.href = '../index.html';
      }); 
      