
// grab the first link from search
// 	- link with python
// 		- can the python open the first link?
//  - web scrape with js
//      - do i need to set up express 

import axios from 'axios';
import cheerio from 'cheerio';
import express from "express";
import bodyParser from "body-parser";
// import puppeteer from "puppeteer";


const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const googleArray = ["niv", "esv", "easy+bible"];

async function getFirstGoogleSearchLink(query) {
    try {
  
        const response = await axios.get(query , {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
            }
        });


    } catch (error) {
        console.error('Error fetching the first link:', error);
        return null;
    }
}



app.get("/", (req, res) => {
    res.render("index.ejs");
  });


app.post("/submit", (req, res) => {
    var searchInput = req.body.query;

    for (let index = 0; index < googleArray.length; index++) {
        googleArray[index] = "https://www.google.com/search?q=" + googleArray[index] + "+" + searchInput ;
    }

    // googleArray.forEach(element => {
    //     exec('open ' + element);
    // });

    console.log(getFirstGoogleSearchLink(googleArray[0]));

    
    res.render("index.ejs");
});
  







app.listen(port, () => {
    console.log(`http://localhost:3000/`);
  });

