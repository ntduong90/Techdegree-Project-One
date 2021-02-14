/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Quotes array that includes quote objects with properties: quote, source, citation and year.
const quotes = [
  {
    quote: 'Leadership requires belief in the mission and unyielding perserverance to achieve victory.',
    source: 'Jocko Willink',
    citation: 'Extreme Ownership: How U.S. Navy SEALs Lead and Win'
  },
  {
    quote: 'Hesitation is the enemy. It allows the moment to pass, the opportunity to be lost, the enemy to get the upper hand.',
    source: 'Jocko Willink'
  },
  {
    quote: 'If you know the way broadly, you will see it in everything.',
    source: 'Miyamoto Musashi',
    citation: 'The Book of Five Rings',
    year: 1643
  },
  {
    quote: 'Who\'s gonna carry the boats?!',
    source: 'David Goggins'
  },
  {
    quote: 'Jiu Jitsu is not about defeating and submitting your opponent. It\'s about defeating your mind when it\'s  screaming: "I QUIT."',
    source: 'Nhan Duong',
    year: 2020
  },
  {
    quote: 'If you want to change the world, start off by making your bed.',
    source: 'Admiral William H. McRaven',
    year: 2014
  }
];



//getRandomQuote function that randomly chooses a number between 0 and 5 in respect to the Quotes Array. 
//This returns a value that allows the application to access objects within the Quotes Array at random.

function getRandomQuote() {
  randomNum =  Math.floor(Math.random() * (quotes.length) + 0);
  return quotes[randomNum];
}



//printQuote function returns html string to be printed on the web page. The html string contains the quote and source. If statements
//sets conditions in which citation and year are to be displayed. 
function printQuote() {
  let randomQuote = getRandomQuote();  
  let html =  `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`

              if (randomQuote.citation !== undefined) {
                html += '<span class="citation">' + randomQuote.citation + '</span>';
              }

              if (randomQuote.year !== undefined) {
                html += '<span class="year">' + randomQuote.year + '</span>';
              }

              html += `</p>`;
           
document.getElementById('quote-box').innerHTML = html;  
return html;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);