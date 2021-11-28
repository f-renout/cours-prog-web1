const displayJson = function ({ records }) {
  // console.log(records)
  const fields = records.map(r => r.fields)
  // console.log(fields)
  fields.sort((a, b) => a.start_date.localeCompare(b.start_date))
  // console.log(fields)
  // maintenant on va créer les items qui nous interessent
  // je veux la description, la date de debut et la date de fin
  document.getElementById('result').innerHTML = ''
  for (const { description, start_date: dateDebut, end_date: dateFin } of fields) {
    document.getElementById('result').appendChild(createChild(description, dateDebut, dateFin))
  }
}

const createChild = function (description, dateDebut, dateFin) {
  const toAdd = document.createElement('div')
  toAdd.classList.add('conges')
  toAdd.appendChild(createDiv(description, 'description'))
  toAdd.appendChild(createDiv(parseDate(dateDebut), 'dateDebut'))
  toAdd.appendChild(createDiv(parseDate(dateFin), 'dateFin'))
  return toAdd
}

const parseDate = function (toParse) {
  const date = new Date(toParse)
  return date.toLocaleString('fr-FR', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
}

const createDiv = function (contenu, classe) {
  const toAdd = document.createElement('span')
  toAdd.classList.add(classe)
  toAdd.textContent = contenu
  return toAdd
}

const parser = function () {
  const academie = document.getElementById('academie').value
  const annee = document.getElementById('annee').value
  console.log(academie)
  console.log(annee)
  const req = new XMLHttpRequest()
  const url = `https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-calendrier-scolaire&q=&facet=description&facet=population&facet=location&facet=start_date&facet=end_date&facet=zones&facet=annee_scolaire&refine.annee_scolaire=${annee}&refine.location=${academie}`

  console.log(url)
  req.overrideMimeType('application/json')
  req.open('GET', url, true)

  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const myJson = JSON.parse(this.responseText)
      displayJson(myJson)
    }
  }
  req.send()
}
