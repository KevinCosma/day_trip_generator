function destination(destinationArray){ 
    let random;
    random = destinationArray[Math.floor(Math.random() * destinationArray.length)]; //this should randomly decide the destination
        console.log(random);
    let decision;
    decision = prompt("If you like this destination, type yes. If you do not, type no").toLowerCase();       //give them the option to choose yes or no
        if(decision === "yes"){                
            console.log("Good choice!");
            return random;
        }
        while(decision === "no"){      //if they did not like the first option they can try again
            console.log("Let's try a different one");
            random = destinationArray[Math.floor(Math.random() * destinationArray.length)];         
            console.log(random);
            decision = prompt("If you like this destination, type yes. If you do not, type no").toLowerCase();
                if(decision === "yes"){                
                console.log("Good choice!");
                return random;   
            }         
        }
        while(decision != "yes" || decision != "no"){
            console.log("Sorry, that was not one of the choices.");
            decision = prompt ("if you like this destination, type yes. If not, type no.").toLowerCase();;
            return decision
        } 
}

let destinationDecision = destination(["Japan", "Italy", "South Korea", "Ireland", "Germany", "New Zealand"]);
    console.log(destinationDecision);

function restaurant(restaurantArray){
    let random;
    random = restaurantArray[Math.floor(Math.random() * restaurantArray.length)];   
        console.log(random);
    let decision;
    decision = prompt("If you like this restaurant, type yes. If you do not, type no").toLowerCase();;
        if(decision === "yes"){
            console.log("Sounds delicious!");
            return random
        }
        while(decision === "no"){
            console.log("Does that one not sound appealing? Let's try again!")
            random = restaurantArray[Math.floor(Math.random() * restaurantArray.length)];
            console.log(random);
            decision = prompt ("if you like this restaurant, type yes. If not, type no.").toLowerCase();;
                if(decision === "yes"){                
                console.log("Sounds delicious!");
                return random;
            }    
        }
        while(decision != "yes" || decision != "no"){
            console.log("Sorry, that was not one of the choices.");
            decision = prompt ("if you like this restaurant, type yes. If not, type no.").toLowerCase();;
            return decision
        }
}        

let restaurantDecision = restaurant(["Sushi", "Pasta", "Bimbimbop", "Bar", "Bratwurst", "Hangi"]);
    console.log(restaurantDecision)


    function transportation(transportationArray){
    let random;
    random = transportationArray[Math.floor(Math.random() * transportationArray.length)];
        console.log(random)
    let decision = prompt("If you like this mode of transportation, type yes. If you do not, type no.").toLowerCase();;
        if(decision === "yes"){
            console.log("This will be a fun experience!");
            return random
        }
        while(decision === "no"){
            console.log("Not a fan? Try a different one.") 
        random = transportationArray[Math.floor(Math.random() * transportationArray.length)];
            console.log(random);
        decision = prompt("If you like this mode of transportation, type yes. If you do not, type no.").toLowerCase();;
            if(decision === "yes"){                
            console.log("This will be a fun experience!");
            return random;
            }    
        }
        while(decision != "yes" || decision != "no"){
            console.log("Sorry, that was not one of the choices.");
            decision = prompt ("if you like this mode of transportation, type yes. If not, type no.").toLowerCase();;
            return decision
        }
}

let transportationDecision = transportation(["Plane", "Ship", "Train", "Public Transportation", "Walk"]);
    console.log(transportationDecision);

function entertainment(entertainmentArray){
    let random;
    random = entertainmentArray[Math.floor(Math.random() * entertainmentArray.length)];
        console.log(random)
    let decision = prompt("If you like this form of entertainment, type yes. If you do not, type no.").toLowerCase();;
        if(decision === "yes"){
            console.log("You will have tons of fun!")
            return random
        }    
        while(decision === "no"){
            console.log("That doesn't sound fun? Let's try something else.");
        random = entertainmentArray[Math.floor(Math.random() * entertainmentArray.length)];
            console.log(random);
        decision =  prompt("If you like this form of entertainment, type yes. If you do not, type no.").toLowerCase();;
            if(decision === "yes"){                
            console.log("You will have tons of fun!");
            return random;
            }    
        }
        while(decision != "yes" || decision != "no"){
            console.log("Sorry, that was not one of the choices.");
            decision = prompt ("if you like this form of entertainment, type yes. If not, type no.").toLowerCase();;
            return decision
        }
}

let entertainmentDecision = entertainment(["Karayoke", "Gondola ride", "Visit palaces", "Watch Riverdancing", "Visit Castles", "Hiking"]);
    console.log(entertainmentDecision);

function finishingTouches(String){
    let finished; 
    finished = prompt("Confirm your day trip is Complete by typing yes").toLowerCase();;
        if(finished === "yes");
        console.log("COMPLETE"); 
}    

let wrappedUp = finishingTouches("COMPLETE")


console.log("Congratulations! Your trip has been decided!");
console.log("Here is what you decided on:");
console.log(destinationDecision);
console.log(restaurantDecision);
console.log(transportationDecision);
console.log(entertainmentDecision);
console.log("Enjoy your trip!")

