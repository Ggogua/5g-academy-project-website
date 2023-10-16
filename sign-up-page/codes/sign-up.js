const inputBarsOne = document.querySelectorAll(".name-bar-first");
const inputBarsTwo = document.querySelectorAll(".name-bar");
const inputBarsThree = document.querySelectorAll(".name-bar-last");
const inputBarFour = document.getElementById('genere-bar');
const signUpButton = document.getElementById('sign-up-button');
const popup = document.getElementById('popup');
const secondParagraph = document.getElementById('second-page');
const nextLink = document.getElementById('next-link');

function checkInputBars(inputBars) {
    for (const inputBar of inputBars) {
        if (inputBar.value.trim() === "") {
            return false;
        }
    }
    return true;
}

signUpButton.addEventListener('click', () => {
    const inputBarsToCheck = [...inputBarsOne, ...inputBarsTwo, ...inputBarsThree, inputBarFour];

    if (checkInputBars(inputBarsToCheck)) {
        popup.classList.add('open-popup');
    } else {
        alert("Please fill in all input bars.");
    }
});

nextLink.addEventListener('click', () => {
    const elementToChange = document.getElementById('popup');
    if (elementToChange) {
        const theBreak = '<br>';
        const firstButton = '<button class="button1" onclick="window.location=\'../../terms-conditions-page/codes/terms.html\'">Agree</button>';
        const secondButton = '<button class="button2" onclick="window.location=\'../../landing-page/codes/landing-page.html\'">Decline</button>';
        elementToChange.innerHTML = `
            Informativa sulla Privacy
            ${theBreak}- Raccogliamo informazioni personali degli utenti solo per fornire il servizio e migliorare l'esperienza dell'utente.
            ${theBreak}- Le informazioni raccolte possono includere dati di registrazione, interazioni con l'assistente 2D e informazioni sullo stato emotivo.
            ${theBreak}- Trattiamo le informazioni in conformità con le leggi sulla privacy applicabili e non le condividiamo con terzi senza il consenso dell'utente, a meno che non sia necessario per fornire il servizio o adempiere agli obblighi di legge.
            ${theBreak}- I dati raccolti verranno condivisi in forma anonima con l'Ateneo per ottemperare alla funzione di monitoraggio prevista dalla nostra applicazione.
            ${theBreak}- Adottiamo misure di sicurezza tecniche e organizzative per proteggere i dati personali degli utenti, ma nessun sistema può garantire una sicurezza totale.
            ${theBreak}- Utilizziamo cookies e tecnologie simili per migliorare il funzionamento della web app e personalizzare l'esperienza dell'utente.
            ${theBreak}- Gli utenti possono gestire le preferenze sui cookies attraverso le impostazioni del proprio browser.
            ${theBreak}- Ci riserviamo il diritto di apportare modifiche all'Informativa sulla Privacy, che saranno pubblicate sulla web app. L'utilizzo continuato del servizio dopo le modifiche costituirà l'accettazione delle nuove disposizioni.
            ${theBreak}Se hai domande o hai bisogno di chiarimenti puoi contattarci attraverso i canali forniti nella web app.
            ${theBreak}Clicca su "Agree" per procedere.
            ${theBreak}Grazie per aver scelto MYFE.
            ${theBreak}
            ${theBreak} ${firstButton} ${secondButton}`;
    }
});
