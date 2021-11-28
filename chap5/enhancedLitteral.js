const createTelephone = function (marque, modele, typeSonnerie, melodieFct) {
  const res = {
    marque: marque,
    modele: modele
  }
  res['sonnerie' + typeSonnerie] = melodieFct
  return res
}

const vieuxTel = createTelephone('Nokya', '3310', 'Beep', function () { console.log(`je suis un ${this.marque}  ${this.modele} et je fais beeep`) })

console.log(vieuxTel.marque)
vieuxTel.sonnerieBeep()

const createTelephone2 = function (marque, modele, typeSonnerie, melodieFct) {
  return {
    marque,
    modele,
    [`sonnerie${typeSonnerie}`]: melodieFct
  }
}

const autreTel = createTelephone2('IPhone', '13', 'Clong', function () { console.log(`je suis un ${this.marque}  ${this.modele} et je fais pleins de bruit`) })

console.log(autreTel.marque)
autreTel.sonnerieClong()

const telephone = { nom: 'unNom', marque: 'uneMarque' }
const { nom: name, marque } = telephone
console.log(marque)
console.log(name)
