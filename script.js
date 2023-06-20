//variables declaration

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const  quotes = [{
    quote: `"lorem10 Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. In reiciendis tenetur dicta dolore!"`,
    person: `mercy mwangangi`
},{
    quote: `"lorem10 Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. In reiciendis tenetur dicta dolore!"`,
    person: `James mwangangi`
},{
    quote: `"lorem10 Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. In reiciendis tenetur dicta dolore!"`,
    person: `Victor Yegon`
},{
    quote: `"lorem10 Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. In reiciendis tenetur dicta dolore!"`,
    person: `mery Atwoli`
},{
    quote: `"lorem10 Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. In reiciendis tenetur dicta dolore!"`,
    person: `John mwangangi`
},{
    quote: `"lorem10 Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. In reiciendis tenetur dicta dolore!"`,
    person: `James mkenya`
},
];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})