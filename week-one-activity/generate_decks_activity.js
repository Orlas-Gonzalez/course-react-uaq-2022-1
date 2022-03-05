/*
    Marcos Orlando García González
    Carrera: Ingeniería En Software; Expediente: 283169
*/

var numbers_deck = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
var type_deck = [["corazones", "tréboles", "diamantes", "picas"],
                 ["monedas", "copas", "espadas", "bastones"],
                 ["escudos", "rosas", "campanas", "bellotas"]];
var jokers_deck =[["jota", "reina", "rey"],
                  ["escudero", "caballo", "rey"]];
var currentNumberDeck;
var resultDeck = [];

function pushJokers(indexJoker){
    for(let i = 0; i < 3; i++){
        currentNumberDeck.push(jokers_deck[indexJoker][i]);
    }
}

function setCurrentDeck(deckSelected){
    currentNumberDeck = Object.values(numbers_deck);
    switch(deckSelected){
        case 0:
            currentNumberDeck.shift();
            currentNumberDeck.unshift('as');
            pushJokers(0);
            break;
        case 1:
            pushJokers(1);
            break;
        case 2:
            pushJokers(1);
            break;
    }
;}

function build_decks(startPoint, deckSelected){
    setCurrentDeck(deckSelected);
    for(let i = 0; i < 4; i++){
        for(let j = startPoint; j < 13; j++){
           resultDeck.push("[ " + currentNumberDeck[j] + "_de_" + type_deck[deckSelected][i] + " ]");
        }
    }
    console.log(resultDeck);
}

function generate_decks(type_deck){
    switch(type_deck.toLowerCase()){
        case "francés":
            build_decks(0, 0);
            break;
        case "español":
            build_decks(0, 1);
            break;
        case "suizo":
            build_decks(5, 2);
            break;
        case "":
            build_decks(0, 0);
            break;
        default:
            console.log("<!--- ATENCIÓN: El mazo que has solicitado no se encuentra en nuestra base de datos. Por favor selecciona un tipo de baraja valido: francés, español o suizo.");
    }
}

generate_decks("suizo");
