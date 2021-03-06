//Javascript file

//This corresponds to a paragraph with the id of "display" in my HTML file.
var display = document.getElementById('display');


//This function includes an array and a randomizer. It helps to generate a random insult.
function generateInsult(){
    //This is the array that contains all of the insults. Each insult is an item with a number assigned to it.
    var insultArray = [
    'I could eat an entire bowl of alphabet soup and crap out a better sentence.', 
    'Newton\'s fourth law states that you\'re a piece of trash.', 
    "You must have been born on a highway, because that\'s where most accidents happen.",
    "It looks like your face caught on fire and someone tried to put it out with a fork.",
    "Your family tree is a cactus, because everybody on it is a prick.",
    "I would ask how old you are, but I know you can\'t count that high.",
    "Someday you\'ll go far . . . and I hope you stay there.",
    "You\'re so ugly, when your mom dropped you off at school she got a fine for littering.",
    "Left shark dances better than you.",
    "You\'re the reason the gene pool needs a lifeguard.",
    "I don\'t exactly hate you, but if you were on fire and I had water, I\'d drink it.",
    "If I gave you a penny for your thoughts, I\'d get change.",
    "May the wings of your eyeliner always be uneven.",
    "Your memes ain't dank.",
    ];
    
    //This variable is the random insult. It is generated through a randomizer that picks a random number 
    //between 0 and the arary's length.
    var randomInsult = insultArray[Math.floor(Math.random() * insultArray.length)];
    
    //This displays the random insult on the web page.
    display.innerHTML = randomInsult;
    
    //This calls the function.
    generateInsult();
}

