//12/15/2013 - Made for Ludum Dare 28
//**SPOILERS AHEAD** - LOOK AT YOUR OWN RISK
var input = document.getElementById('input');
var text = document.getElementById('text');
var stuff = document.getElementById('stuff');
var dogDead = false;
//Used when your egg is lost or you die
function die() {
    stuff.remove();
}
//Outcomes for multiple-outcomes commands
var throwMe = new Array('You threw the egg at yourself, and it killed you.', 'You tried to throw the egg at your face,<br>but you missed and it fell to the ground,<br>exploding as soon as it reached it.', 'You threw the egg at yourself,<br>and now you have egg stuff all over your body.', 'You threw the egg at yourself,<br>but it bounced off and landed safely on your hand.');
var throwDog = new Array('You threw the egg at your dog.<br>They both died.', 'You threw the egg at your dog.<br>Now your dog is all sticky and yellow.', 'You threw the egg at your dog.<br>Your dog died but the egg is still in perfect shape.', 'You threw the egg at your dog.<br>It bounced off of him and you caught it in the air.');
var throwDeadDog = new Array('You threw the egg at the corpse of your dog.<br>The egg joined him in non-human heaven.', "You threw the egg at the corpse of your dog.<br>The egg didn't break.");
var throwFar = new Array("You threw the egg,<br>but it didn't make it very far and crashed into the ground.", 'You threw the egg with a force so great that it is now orbiting the Earth.<br>Many years later, it saved the Earth from an incoming meteorite.', "You threw the egg so far,<br>that a guy two kilometers away from where you were standing caught it and threw it back to you." ,'You threw the egg with a force so great that it circled the Earth and came back to you,<br>so you caught it in the air.');
var kill = new Array('You smashed the egg.<br>It died.', 'You tried to smash the egg,<br>but it dodged the attack.', 'The egg dodged the attack,<br>but it fell to the ground and destroyed itself.');
var cook = new Array('You put the egg in the microwave and set the timer to 3 minutes.<br>The neighborhood blew up.', 'You made a hard boiled egg.<br>It was normal.', 'You made a fried egg.<br>It was quite yummy.', 'You made a fried egg with bacon.<br>It was one of the best meals you have ever done in your whole life.', "You tried to cook the egg, but you weren't sure about how to do it,<br>so you ended up not doing anything.");
var throwSanta = new Array('You threw the egg at Santa and he died.<br>You ruined the upcoming Christmas.<br>Great job.', "You threw the egg at Santa.<br>He lost control of his sled and fell to the ground.<br>When you approach the wreckage, inside one of the gift boxes you find an infinite supply of eggs!<br>Congratulations! You won!<br>...Or, did you?<br>You feel an extreme guilt for killing Santa and breaking the rules of both the Ludum Dare 28 theme and of the game itself,<br>so you jump atop Rudolph's antlers,<br>and you die.", "You threw the egg at Santa, but missed.<br>You were able to catch the egg before it fell to the ground.");
var giveHTB = new Array("You gave the egg to HowToBasic.<br>Upon grabbing it, he clenched his fist, destroying the innocent egg.", "You gave the egg to HowToBasic, and he magically transformed it into dozens of eggs.<br>But he began stomping on the eggs, leaving only one of them alive,<br>which he gave to you as a thanks for all the eggs that you made possible for him to murder.");
//Pretty much the whole game
input.onkeypress = function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13){
        switch (input.value.toLowerCase()) {
            case 'help':
            case 'help please':
            case 'help pls':
            case 'help plz':
            case "i don't know what to do":
            case "i dont know what to do":
            case "i don't know":
            case "i dont know":
            case "i don't even":
            case "i dont even":
            case "idonteven":
            case 'what':
            case 'what to do':
            case 'what do i do':
            case 'what do i do?':
                text.innerHTML = "You can give or throw your egg at objects or beings (i.e. 'throw at &ltthing&gt').<br>Play around and try to do things with your egg!<br>Also, the game isn't case-sensitive.<br><br>TIP: You have a dog.";
                break;
            case 'throw at myself':
            case 'throw at me':
                text.innerHTML = throwMe[Math.floor(Math.random() * throwMe.length)];
                if (text.innerHTML === throwMe[0] || text.innerHTML === throwMe[1] || text.innerHTML === throwMe[2]){die();}
                break;
            case 'throw at dog':
            case 'throw at dawg':
                if (dogDead === false) {
                    text.innerHTML = throwDog[Math.floor(Math.random() * throwDog.length)];
                    if (text.innerHTML === throwDog[0] || text.innerHTML === throwDog[1]){die();}
                    if (text.innerHTML === throwDog[2]){dogDead = true;}
                }else{
                    text.innerHTML = throwDeadDog[Math.floor(Math.random() * throwDeadDog.length)];
                    if (text.innerHTML === throwDeadDog[0]){die();}                    
                }
                break;
            case 'throw very far':
            case 'throw far away':
            case 'throw far':
                text.innerHTML = throwFar[Math.floor(Math.random() * throwFar.length)];
                if (text.innerHTML === throwFar[0] || text.innerHTML === throwFar[1]){die();}
                break;
            case 'nom':
            case 'nomnom':
            case 'nomnomnom':
            case 'eat':
                text.innerHTML = 'You ate the egg and it was very yuck. You died.';
                die();
                break;
            case 'throw':
                text.innerHTML = 'You threw the egg in a random direction.<br>It fell to the ground and is now all over the place.';
                die();
                break;
            case 'give to dog':
            case 'give to dawg':
                if (dogDead === false) {
                    text.innerHTML = "You gave the egg to your dog. It said it was very nasty and threw it up.<br>Now it's full of horrible dog saliva.";
                }else{
                    text.innerHTML = "You tried to give the egg to your dog,<br>but it was dead so nothing happened.";
                }
                break;
            case 'give to me':
            case 'give to myself':
                text.innerHTML = "You gave the egg to yourself. Now you're holding it in your other hand";
                break;
            case 'kill':
            case 'break':
            case 'destroy':
            case 'smash':
                text.innerHTML = kill[Math.floor(Math.random() * kill.length)];
                if (text.innerHTML === kill[0] || text.innerHTML === kill[2]){die();}
                break;
            case 'cook':
                text.innerHTML = cook[Math.floor(Math.random() * cook.length)];
                if (text.innerHTML === cook[0] || text.innerHTML === cook[1] || text.innerHTML === cook[2] || text.innerHTML === cook[3]){die();}
                break;
            case 'throw at santa claus':
            case 'throw at santa':
            case 'throw at claus':
            case 'throw at papa noel':
            case 'throw at papá noel':
                text.innerHTML = throwSanta[Math.floor(Math.random() * throwSanta.length)];
                if (text.innerHTML === throwSanta[0] || text.innerHTML === throwSanta[1]){die();}
                break;
            case 'give to egg':
            case 'give to itself':
            case 'throw to egg':
            case 'throw to itself':
                text.innerHTML = "Your paradox has destroyed spacetime in all multiverses and dimensions.<br>You died.";
                die();
                break;
            case 'throw at chuck norris':
                text.innerHTML = "You threw the egg at Chuck Norris.<br>Before the egg even reached him, you were already more than dead.";
                break;
            case 'give to chuck norris':
                text.innerHTML = "You offered the egg to Chuck Norris.<br>You died.";
                break;
            case 'give to howtobasic':
            case 'give to how to basic':
            case 'give to howto basic':
            case 'give to htb':
                text.innerHTML = giveHTB[Math.floor(Math.random() * giveHTB.length)];
                if (text.innerHTML === giveHTB[0]){die();}
                break;
            case 'throw at how to basic':
            case 'throw at howto basic':
            case 'throw at htb':
            case 'throw at howtobasic':
                text.innerHTML = "You threw the egg at HowToBasic.<br>He became enraged and destroyed all the eggs in the universe.";
                die();
                break;
            default:
                text.innerHTML = 'Nothing happened.';
                break;
        }
        input.value = '';
    }
};