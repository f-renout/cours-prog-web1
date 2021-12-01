function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Batterie {
    constructor(amperage, autonomieVeille, autonomieParole) {
        this.amperage = amperage;
        this.autonomieVeille = autonomieVeille;
        this.autonomieParole = autonomieParole;
    }

    pourcentage(){
        return `autonomie max : ${this.autonomieVeille}
il me reste ${getRandomInt(101)} % de batterie disponible`
    }

}

class Telephone {
    constructor(marque, modele, appareilPhoto, batterie, anneeFabrication) {
        this.marque = marque;
        this.modele = modele;
        this.appareilPhoto = appareilPhoto;
        this.batterie = batterie;
        this.anneeFabrication = anneeFabrication;
    }

    status(){
        return `  _________ __          __                
 /   _____//  |______ _/  |_ __ __  ______
 \\_____  \\\\   __\\__  \\\\   __\\  |  \\/  ___/
 /        \\|  |  / __ \\|  | |  |  /\\___ \\ 
/_______  /|__| (____  /__| |____//____  >
        \\/           \\/                \\/ 
marque: ${this.marque}
mémoire ${getRandomInt(1000)} photos
${batterie.pourcentage()}
==========================================`
    }
}

const batterie = new Batterie(1000, 170, 3.5);
const tel = new Telephone('nokia','3910', true, batterie, 2002);
console.log(tel.status());

const jsonString = JSON.stringify(tel)
console.log(jsonString)

const obj = JSON.parse(jsonString)
console.log(obj)
// obj.status();


var tel1 = Object.assign(new Telephone(), obj);
console.log(tel1.status())
//mettre le this

tel1.batterie = Object.assign(new Batterie(), obj.batterie)
console.log(tel1.status())
