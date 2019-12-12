// JE RETIRE LES ELEMENTS DE PONCTUATION
let phrase = document.getElementById("nutella").innerHTML;
// Je repasse sur la phrase autant de fois qu'il y a de lettres pour retirer les signes de ponctuations
// Je vais ensuite supprimer les doubles espaces
for (let i = 0; i < phrase.length; i++) {
    phrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");
    phrase = phrase.replace("  ", " ")
}

console.log(phrase);

// JE VAIS COMPARER LES TAILLES DES ELEMENTS DE LA CHAINE DE CARA EN TABLEAU
let recepteurMax = "";
let comptageMax = 0;

function comptage(phraseEntree) {
    phraseEntree = phraseEntree.split(" ");
    for (let i = 0; i < phraseEntree.length; i++) {
        if (recepteurMax.length <= phraseEntree[i].length) {
            recepteurMax = phraseEntree[i]
            comptageMax = phraseEntree[i].length
        }
    }
    document.getElementById("motPlusLong").innerHTML = `Le mot le plus long du paragraphe est "${recepteurMax}" avec une longeur de "${comptageMax}" lettres<br>`;
}
comptage(phrase);