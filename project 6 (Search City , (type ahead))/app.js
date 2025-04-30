// First we get city and state name from JSON , 
// then make type-ahead functions 


const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];


fetch(endpoint)
    .then(data=>data.json())
    .then(jData=>cities.push(...jData));


function findWord(wordtoFind,cities){
    return  cities.filter(place => {
        const regex = new RegExp(wordtoFind , 'gi');
        return place.city.match(regex);
    })    
}

function displaySearch() {
    const matchArray = findWord(this.value , cities);
    const html = matchArray.map(place => {
            // highlight searched words : 
        const regex = new RegExp(this.value , 'gi');
        const cityName = place.city.replace(regex , `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex , `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${place.population}</span>
            </li>`
    }).join(''); //to turn array into string
    suggestions.innerHTML= html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('keyup' ,displaySearch);
search.addEventListener('change' ,displaySearch);