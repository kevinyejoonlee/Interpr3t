
import axios from 'https://cdn.skypack.dev/axios';
import cheerio from 'https://cdn.skypack.dev/cheerio';


var form = document.getElementById('searchBar');
var searchInput = document.getElementById('search');
var searchOnGoogle = ["niv", "esv", "easy bible"];


async function scrapeFirstResult(query) {
    try {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

        const response = await axios.get(searchUrl);
        const $ = cheerio.load(response.data);

        // Google's search result selectors (note: these are likely to change)
        const resultsSelector = 'div#search .tF2Cxc';
        const firstResult = $(resultsSelector).first().find('a').attr('href');

        console.log('First search result URL:', firstResult);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    document.close()

    for (let index = 0; index < searchOnGoogle.length; index++) {
        searchOnGoogle[index] = "https://www.google.com/search?q=" + searchOnGoogle[index] + " " + searchInput.value ;
        
    }

    searchOnGoogle.forEach(element => {
        var newWindow = window.open(element, '_blank');

     
        });



});


