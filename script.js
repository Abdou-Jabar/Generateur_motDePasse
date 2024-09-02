function generer(){
    const lettresMinuscules = "abcdefghijklmnopqrstuvwxyz";
    const lettresMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chiffres = "0123456789";
    const caracteresSpeciaux = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const tousLesCaracteres = lettresMinuscules + lettresMajuscules + chiffres + caracteresSpeciaux;

    let motDePasse = "";
    let longueur = 12;

    for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * tousLesCaracteres.length);
        motDePasse += tousLesCaracteres[indexAleatoire];
    }

    document.getElementById("mdp").innerText = `${motDePasse}`;
}