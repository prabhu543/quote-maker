const api1="https://api.quotable.io/random";
const quote =document.querySelector('#quote');
const author =document.querySelector('#author');


async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote(api1);

touch1=()=>{
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + '---- by ' + author.innerHTML , "tweet window" , "window=600 , height=300");
}