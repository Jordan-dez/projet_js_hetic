// 01 Exercice Parser
// Créez une classe Parser qui permettra de parser une chaîne de caractères en fonction d'un motif donné. Voyez l’exemple de l'utilisation de cette classe ci-dessous avant d'implémenter le code. Gardez les digits uniquement ainsi que les nombres dans la chaîne de caractères.

// const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

// const p = new Parser(":");
// p.parse(phrase);
// console.log(p.str);
//8790 8987 7777 9007


class Parser{
    constructor(separator){
        this._separator = separator;
    }

    parse(word){
        // word.split(this._separator)
       let resultat= word.split(this._separator).filter(element=>Number(element.trim()))
       resultat.join("")
       console.log(resultat.join(" "));
    }

}
const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';
const p = new Parser(':');
p.parse(phrase);