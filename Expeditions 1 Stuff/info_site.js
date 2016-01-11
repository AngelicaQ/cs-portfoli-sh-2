// JavaScript File
//All of these variables correspond to ID's listed in <div id = "info_site_information>."
var heading = document.getElementById("heading");
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

/*These are facts about the mantis shrimp. Like the rest of the information in 
quotation marks, they will only be displayed if the user clicks on the information's 
corresponding iamge.*/

/*The <br />'s within the quotations create line breaks. Since the next information begins
with the next ID. There is already a single line break. I wanted more space between the 
two pieces of information, so I used a second <br />.*/

item1.addEventListener("click", function(){
    heading.innerHTML = "<h2>The Mantis Shrimp</h2>"
    info1.innerHTML = "You see this little thing? This little tiny thing right here? This green little piece of trash and terror with the funny little eyes? Well, little buddy, it's called a mantis shrimp, and it's best known for being the physical manifestation of undersea terror and darkness. You think that I'm exaggerating, but no. No. <br /> <br />";
    info2.innerHTML = "An average mantis shrimp has a body of about 2 to 7 inches long. That may not seem too intimidating, but some of them can grow up to be about 12 inches. In addition to that, every single one of them can punch with the force of a 22-caliber bullet. That means that, somewhere out at sea, there's a whole foot of blind fury and violence wanting to punch the living crap out of every fish in the ocean. Now imagine all of them scuttling up to you at the same time with their claws clicking and flailing through the air. That'd be hilarious and terrifying all at the same time, wouldn't it? <br /> <br />";
});

//These are facts about hornets.
item2.addEventListener("click", function(){
    heading.innerHTML = "<h2>The Hornet</h2>"
    info1.innerHTML = "Some people say that hornets love bees, but that's why no one talks to those types of people. They only tell lies. The real truth is that hornets love to kill bees. They're like bees on steroids, to be honest, because hornets are about 5 times as big as an average honeybee, and it only takes one of them to kill 40 honey bees per minute. You wouldn't have those statistics if hornets sincerely loved bees, wouldn't you? <br /> <br />";
    info2.innerHTML = "The venom from a hornet's sting can be fatal since they inject so much of it into your bloodstream all at once. It's very unlikely that you'd get stung by one, but who knows? Hornets rage 24/7, yo. <br /> <br />";
    info3.innerHTML = "Hornets love to eat sugar from fruit, which is sort of why I see fruit hats and fruit baskets as real dangers.";
    
});

//These are facts about scorpions.
item3.addEventListener("click", function(){
    heading.innerHTML = "<h2>The Scorpion</h2>"
    info1.innerHTML = "Female scorpions are commonly the largest ones in their species, and tend to devour their male partners if they do not move fast enough after mating ... yeah. I don't have anything witty to say about this. I don't think that any of us really would, to be honest.<br /> <br />";
    info2.innerHTML = "There are about 90 species of scorpions living in the United States. Meanwhile, the only place in the world where you wouldn't find a scorpion is Antarctica. <br /> <br />";
    info3.innerHTML = "Scorpions are venomous, but only a few of them have venom that could actually make you ill or kill you. Still though, that doesn't make me less scared of them. I mean, they got 12 eyes and claws, bruh. Nothing harmless needs those things. ";
    
});

//These are facts about cats.
item4.addEventListener("click", function(){
    heading.innerHTML = "<h2>The Cat</h2>"
    info1.innerHTML = "Cats spend two thirds of their life sleeping. That means that a cat that is 6 years old has only been awake for 2 years.<br /> <br />";
    info2.innerHTML = "Cats can make about 100 different sounds while dogs can only make 10. I don't know why someone would spend their time recording the different noises their cats made, but oh well. <br /> <br />";
    info3.innerHTML = "Cats have actually been sent on trips to space, and the first time one was sent was in 1963. It was a French cat named Felicette and nicknamed Aristocat. And -- oh my gosh. Really? Really? THE FIRST CAT IN SPACE WAS NICKNAMED AFTER A PUN? I CAN'T. I JUST CAN'T. NO, THIS IS UNACCEPTABLE. YOU KNOW WHAT? THAT'S IT FOR THESE FACTS. I'M DONE. JUST SO DONE. BYE.";
    
});
