// store json file in a variable to avoid using server
var quotes = [
    {
      "quote": "If you want to win you must not lose",
      "author": "Number One"
    },
    {
      "quote": "The one who flies is worthy. The one who is worthy flies. The one who doesn't fly isn't worthy",
      "author": "Grunf"
    },
    {
      "quote": "To get the end, you must go back to the start",
      "author": "Grandmother Yelsh"
    },
    {
      "quote": "Better to wear down your feet running than to die with unworn feet.",
      "author": "Grunf"
    },
    {
      "quote": "Better to live hundred years as a millionaire, than one week in poverty!",
      "author": "Bob Rock"
    },
    {
      "quote": "Easiest way to turn defeat into a victory is to put on the enemy's uniform.",
      "author": "Number One"
    },
    {
      "quote": "Better strategic retreat than dishonorable defeat.",
      "author": "Number One"
    },
    {
      "quote": "No one messes around with a nerd’s computer and escapes unscathed.",
      "author": "E.A. Bucchianeri"
    },
    {
      "quote": "For most people, home we represented by four walls and a roof. Not for Noa. She preferred a motherboard to a mother, a keyboard to house keys. Nothing was more comforting than the hum of a spinning hard drive.",
      "author": "Michelle Gagnon"
    },
    {
      "quote": "You learned a lot by playing RPGs, although not all of it was useful, or real for that matter – unless you really believed that wolves normally carry seven gold pieces, a flawed garnet, a scroll of ice storm, and a lock pick somewhere about their person.",
      "author": "Sorin Suciu,"
    },
    {
      "quote": "The coding was anachronistic, kind of like bokeh in a renaissance painting.",
      "author": "Sorin Suciu"
    },
    {
      "quote": "Geek e-mail sign-off: No trees were killed to send this message, but a large number of electrons were terribly inconvenienced.",
      "author": "Neil deGrasse Tyson"
    },
    {
      "quote": "Many things have been compared to a brick, mainly as a tribute to their intellect or to their aerodynamic characteristics.",
      "author": "Sorin Suciu"
    },
    {
      "quote": "Yeah, baby, learn Git lingo and impress your date!",
      "author": "Ravishankar Somasundaram"
    },
    {
      "quote": "Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.",
      "author": "Dennis the Peasant"
    },
    {
      "quote": "Spock. This child is about to wipe out every living thing on Earth. Now, what do you suggest we do....spank it?",
      "author": "Dr. McCoy"
    },
    {
      "quote": "If I'm not back in five minutes, just wait longer.",
      "author": "Ace Ventura"
    },
    {
      "quote": "Invention, my dear friends, is 93% perspiration, 6% electricity, 4% evaporation, and 2% butterscotch ripple.",
      "author": "Willy Wonka"
    },
    {
      "quote": "Never argue with the data.",
      "author": "Sheen, Jimmy Neutron"
    },
    {
      "quote": "No matter where you go, there you are. ",
      "author": "Buckaroo Banzai"
    },
    {
      "quote": "Greetings, programs!",
      "author": "Flynn"
    },
    {
      "quote": "Try not. Do, or do not. There is no try.",
      "author": "Yoda"
    },
    {
      "quote": "Talk with your mouth full / bite the hand that feeds you / bite off more than you can chew / dare to be stupid.",
      "author": "Weird AL"
    },
    {
      "quote": "If we knew what it was we were doing, it would not be called research, would it?",
      "author": "Albert Einstein"
    },
    {
      "quote": "I know kung fu.",
      "author": "Neo, Matrix"
    },
    {
      "quote": "Your soul-suckin' days are over, amigo!",
      "author": "Elvis, Bubba Ho-Tep"
    },
    {
      "quote": "Never go in against a Sicilian when death is on the line!",
      "author": "Vizzini, The Princess Bride"
    },
    {
      "quote": "Time...to die.",
      "author": "Roy Batty, Blade Runner"
    },
    {
      "quote": "So say we all.",
      "author": "Battlestar Galactica"
    },
    {
      "quote": "My name is Inigo Montoya. You killed my father. Prepare to die!",
      "author": "Inigo, The Princess Bride"
    },
    {
      "quote": "Why a duck? Why-a no chicken?",
      "author": "Chico Marx, Cocoanuts"
    },
    {
      "quote": "These aren't the droids you're looking for.",
      "author": "Obi-Wan, Star Wars"
    },
    {
      "quote": "You don't have to be a gun.",
      "author": "Hogarth, The Iron Giant"
    },
    {
      "quote": "Now I have a machine gun. Ho ho ho.",
      "author": "John McClane, Die Hard"
    },
    {
      "quote": "Make it so. Engage!",
      "author": "Captain Picard"
    },
    {
      "quote": "Fact: at some point or another, every geek will spend more money than they probably should on something geeky.",
      "author": "Alex Langley"
    },
    {
      "quote": "Geeky people often have...a mind with it's own heartbeat.",
      "author": "Garett Freymann"
    },
    {
      "quote": "Challenging a geek to deconstruct a problem rationally is like putting peanut butter in front of a chipmunk— they almost can't help themselves.",
      "author": "Rick Jamison"
    },
    {
      "quote": "Just move to the Internet, its great here. We get to live inside where the weather is always awesome.",
      "author": "John Green"
    },
    {
      "quote": "Beware of geeks bearing formulas.",
      "author": "Warren Buffet"
    },
    {
      "quote": "No-one has ever called me a cool dude. I'm somewhere between geek and normal.",
      "author": "Linus Torvalds"
    },
    {
      "quote": "I never said that!",
      "author": "Jesus and Buddha"
    }
  ];

function getNewColor() {
    var numbers = "012345";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += numbers[Math.floor(Math.random() * 6)];
    }
    return color;
}

function changeBackgroundColor() {
    var newColor = getNewColor();
    $("body").css("background-color", newColor);
  }
  
function newQuote() {
    changeBackgroundColor();
  
    // Math.random gives a float number from 0 to 1
    // we're multiplying with the max number available
    // using Math.floor to ensure an integer that is less than quotes.length-1,
    // because quotes.length wouldn't be a valid index
    var randomIndex = Math.floor(Math.random() * quotes.length);
 

    $("#text").html(`"${quotes[randomIndex].quote}"`);
    $("#author").html(`${quotes[randomIndex].author}`);
    $("#tweet-quote").attr( "href", `https://twitter.com/intent/tweet?text=${quotes[randomIndex].quote}`) 
}

$(document).ready(function () {
    // console.log("Something's working");
    // once the document is ready, select the button and attach the click handler
    // pass the changeBackgrounColor function to the click handler
    $("#new-quote").click(newQuote);
    newQuote();
  });
