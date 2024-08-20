const api_url = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    
}
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" +  quote.innerHTML + "---" + author.innerHTML, "Tweet Window",
         "width = 1000, height 800")
}