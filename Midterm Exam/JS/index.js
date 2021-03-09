const selectBar = document.querySelector('#select-bar')
const countriesop = document.querySelector('#countries')
const selectChoice = document.querySelector('#select')
const website = document.querySelector('#website')
const baseURL = ''

selectChoice.onclick = ()=>{
    let url = `${baseURL}=${selectBar.value}`
    getCountries(url)
}

async function getCountries(url){

    const data = await fetch(url)

    const countries = await data.json()


    loadCountriesOp(countries)
}

function loadCountriesOp(countries) {
    const options = countries.map(uni=> `<option value =${c.web_pages[0]}>${c.name}</option>`)
    countriesop.innerHTML=options
}

function loadWebsite(url) {
    website.innerHTML = `<td>${url}</td>`
}

