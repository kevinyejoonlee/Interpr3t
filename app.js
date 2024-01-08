
import axios from 'https://cdn.skypack.dev/axios';
import cheerio from 'https://cdn.skypack.dev/cheerio';


var form = document.getElementById('searchBar');
var searchInput = document.getElementById('search');
var searchOnGoogle = ["niv","easy bible", "esv"];





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


