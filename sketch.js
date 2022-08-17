let army;


let menuIndex = 0;

let k = 1.5;    //This is used to change the size of the canvas

let troopCapacity;
let spellCapacity;
let ccTroopCapacity;
let ccSpellCapacity;

let selectedTroop = 1;
let selectedDarkTroop = 0;
let selectedSpell = 0;
let selectedDarkSpell = 0;
let selectedSiegeMachine = 0;
let selectedSuperTroops = [];



//Menu1 variables
let troopButtons = [];

//Menu2 variables
let darkTroopButtons = [];

//Menu3 variables
let spellButtons = [];

//Menu4 variables
let darkSpellButtons = [];

//Menu5 variables
let siegeMachineButtons = [];

//Menu6 variables
let superTroopButtons = [];



//Load all sort of stuff
let images;
let fonts;
function preload() {
    images = {
        background: loadImage("images/Background.jpg"),
        next: loadImage("images/Next.png"),
        back: loadImage("images/Back.png"),
        troops: [
            loadImage("images/troops/Barbarian.webp"),
            loadImage("images/troops/Archer.webp"),
            loadImage("images/troops/Giant.webp"),
            loadImage("images/troops/Goblin.webp"),
            loadImage("images/troops/Wallbreaker.webp"),
            loadImage("images/troops/Balloon.webp"),
            loadImage("images/troops/Wizard.webp"),
            loadImage("images/troops/Healer.webp"),
            loadImage("images/troops/Dragon.webp"),
            loadImage("images/troops/PEKKA.webp"),
            loadImage("images/troops/BabyDragon.webp"),
            loadImage("images/troops/Miner.webp"),
            loadImage("images/troops/ElectroDragon.webp"),
            loadImage("images/troops/Yeti.webp"),
            loadImage("images/troops/DragonRider.webp")
        ],
        darktroops: [
            loadImage("images/darkTroops/Minion.webp"),
            loadImage("images/darkTroops/HogRider.webp"),
            loadImage("images/darkTroops/Valkyrie.webp"),
            loadImage("images/darkTroops/Golem.webp"),
            loadImage("images/darkTroops/Witch.webp"),
            loadImage("images/darkTroops/LavaHound.webp"),
            loadImage("images/darkTroops/Bowler.webp"),
            loadImage("images/darkTroops/IceGolem.webp"),
            loadImage("images/darkTroops/Headhunter.webp")
        ],
        spells: [
            loadImage("images/spells/LightningSpell.webp"),
            loadImage("images/spells/HealingSpell.webp"),
            loadImage("images/spells/RageSpell.webp"),
            loadImage("images/spells/JumpSpell.webp"),
            loadImage("images/spells/FreezeSpell.webp"),
            loadImage("images/spells/CloneSpell.webp"),
            loadImage("images/spells/InvisibilitySpell.webp")
        ],
        darkspells: [
            loadImage("images/darkSpells/PoisonSpell.webp"),
            loadImage("images/darkSpells/EarthquakeSpell.webp"),
            loadImage("images/darkSpells/HasteSpell.webp"),
            loadImage("images/darkSpells/SkeletonSpell.webp"),
            loadImage("images/darkSpells/BatSpell.webp")
        ],
        siegemachine: [
            loadImage("images/siegeMachines/WallWrecker.webp"),
            loadImage("images/siegeMachines/BattleBlimp.webp"),
            loadImage("images/siegeMachines/StoneSlammer.webp"),
            loadImage("images/siegeMachines/SiegeBarracks.webp"),
            loadImage("images/siegeMachines/LogLauncher.webp"),
            loadImage("images/siegeMachines/FlameFlinger.webp")
        ],
        supertroops: [
            loadImage("images/superTroops/SuperBarbarian.webp"),
            loadImage("images/superTroops/SuperArcher.webp"), 
            loadImage("images/superTroops/SuperGiant.webp"),
            loadImage("images/superTroops/SneakyGoblin.webp"),
            loadImage("images/superTroops/SuperWallbreaker.webp"),
            loadImage("images/superTroops/RocketBalloon.webp"),
            loadImage("images/superTroops/SuperWizard.webp"),
            loadImage("images/superTroops/SuperDragon.webp"),
            loadImage("images/superTroops/InfernoDragon.webp"),
            loadImage("images/superTroops/SuperMinion.webp"),
            loadImage("images/superTroops/SuperValkyrie.webp"),
            loadImage("images/superTroops/SuperWitch.webp"),
            loadImage("images/superTroops/IceHound.webp"),
            loadImage("images/superTroops/SuperBowler.webp"),
        ]
    };
    fonts = {
        lemondays: loadFont("fonts/LemonDays.ttf")
    };
}


//Setup function
let nextButton;
let backButton;

let troopInput;
let spellInput;
let ccTroopInput;
let ccSpellInput;
function setup() {
    //Set k
    
    //Is horizontal or vertical
    if (displayWidth > displayHeight) {
        k = (displayHeight*0.95) / 450;
    } else {
        k = (displayWidth*0.9) / 900;
    }

    createCanvas(900*k, 450*k);

    textFont(fonts.lemondays);

    //Gui stuff
    nextButton = new Button(770*k, 390*k, 100*k, 36*k, images.next, true, toMenu1);
    backButton = new Button(30*k, 390*k, 100*k, 36*k, images.back, true, null);

    
    troopInput = createInput();
    troopInput.position(130*k, 90*k);
    troopInput.size(80*k);
    troopInput.style('font-size', 35*k+'px');

    spellInput = createInput();
    spellInput.position(570*k, 90*k);
    spellInput.size(80*k);
    spellInput.style('font-size', 35*k+'px');

    ccTroopInput = createInput();
    ccTroopInput.position(130*k, 290*k);
    ccTroopInput.size(80*k);
    ccTroopInput.style('font-size', 35*k+'px');

    ccSpellInput = createInput();
    ccSpellInput.position(570*k, 290*k);
    ccSpellInput.size(80*k);
    ccSpellInput.style('font-size', 35*k+'px');

    //Troops
    for (let i = 0; i < 15; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }
        troopButtons.push(new Button(x+5*k, y+5*k, 80*k, 80*k, images.troops[i], true, function() {
            selectedTroop = i+1;
        }))
    }

    //Dark Troops
    for (let i = 0; i < 9; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }
        darkTroopButtons.push(new Button(x+5*k, y+5*k, 80*k, 80*k, images.darktroops[i], true, function() {
            selectedDarkTroop = i+1;
        }))
    }

    //Spells
    for (let i = 0; i < 7; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }
        spellButtons.push(new Button(x+5*k, y+5*k, 80*k, 80*k, images.spells[i], true, function() {
            selectedSpell = i+1;
        }))
    }

    //Dark Spells
    for (let i = 0; i < 5; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }
        darkSpellButtons.push(new Button(x+5*k, y+5*k, 80*k, 80*k, images.darkspells[i], true, function() {
            selectedDarkSpell = i+1;
        }))
    }

    //Siege Machines
    for (let i = 0; i < 6; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }
        siegeMachineButtons.push(new Button(x+5*k, y+5*k, 80*k, 80*k, images.siegemachine[i], true, function() {
            selectedSiegeMachine = i+1;
        }))
    }

    //Super Troops
    for (let i = 0; i < 14; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }
        superTroopButtons.push(new Button(x+5*k, y+5*k, 80*k, 80*k, images.supertroops[i], true, function() {
            if (selectedSuperTroops.includes(i)) {
                selectedSuperTroops.splice(selectedSuperTroops.indexOf(i), 1);
            }
            else {
                selectedSuperTroops.push(i);
            }
        }))
    }
}


//All draw functions
function draw() {
    background(90);
    image(images.background, 0, 0, width, height);

    //Troop capacity
    if (menuIndex == 0) {
        drawCapacitySelection();
    }

    //Troop selection
    else if (menuIndex == 1) {
        drawTroopSelection();
    }

    //Dark Troop selection
    else if (menuIndex == 2) {
        drawDarkTroopSelection();
    }

    //Spell selection
    else if (menuIndex == 3) {
        drawSpellSelection();
    }

    //Dark Spell selection
    else if (menuIndex == 4) {
        drawDarkSpellSelection();
    }

    //Siege Machine selection
    else if (menuIndex == 5) {
        drawSiegeMachineSelection();
    }

    //Super Troops selection
    else if (menuIndex == 6) {
        drawSuperTroopSelection();
    }




    //Draw troops
    else if (menuIndex == 7) {
        drawTroop();
    }

    //Draw dark troops
    else if (menuIndex == 8) {
        drawDarkTroop();
    }

    //Draw super troops
    else if (menuIndex == 9) {
        drawSuperTroop();
    }

    //Draw Spells
    else if (menuIndex == 10) {
        drawSpell();
    }

    //Draw Dark Spells
    else if (menuIndex == 11) {
        drawDarkSpell();
    }


    //Draw cc Troops
    else if (menuIndex == 12) {
        drawccTroop();
    }

    //Draw cc Spells
    else if (menuIndex == 13) {
        drawccSpell();
    }

    //Draw siege machine
    else if (menuIndex == 14) {
        drawSiegeMachine();
    }
}




//Events
function mouseClicked() {
    let nextbackButtonClicked = false;
    if (menuIndex <= 13) {
        if (nextButton.update(createVector(mouseX,mouseY))) {
            nextbackButtonClicked = true;
        }
    }
    if (menuIndex >= 2) {
        if (backButton.update(createVector(mouseX,mouseY))) {
            nextbackButtonClicked = true;
        }
    }


    if (menuIndex == 1) {
        for (let button of troopButtons) {
            button.update(createVector(mouseX,mouseY));
        }
    }

    else if (menuIndex == 2) {
        let buttonClicked = nextbackButtonClicked;
        for (let button of darkTroopButtons) {
            if (button.update(createVector(mouseX,mouseY))) {
                buttonClicked = true;
            }
        }
        if (!buttonClicked) {
            selectedDarkTroop = 0;
        }
    }

    else if (menuIndex == 3) {
        let buttonClicked = nextbackButtonClicked;
        for (let button of spellButtons) {
            if (button.update(createVector(mouseX,mouseY))) {
                buttonClicked = true;
            }
        }
        if (!buttonClicked) {
            selectedSpell = 0;
        }
    }

    else if (menuIndex == 4) {
        let buttonClicked = nextbackButtonClicked;
        for (let button of darkSpellButtons) {
            if (button.update(createVector(mouseX,mouseY))) {
                buttonClicked = true;
            }
        }
        if (!buttonClicked) {
            selectedDarkSpell = 0;
        }
    }

    else if (menuIndex == 5) {
        let buttonClicked = nextbackButtonClicked;
        for (let button of siegeMachineButtons) {
            if (button.update(createVector(mouseX,mouseY))) {
                buttonClicked = true;
            }
        }
        if (!buttonClicked) {
            selectedSiegeMachine = 0;
        }
    }

    else if (menuIndex == 6) {
        for (let button of superTroopButtons) {
            button.update(createVector(mouseX,mouseY));
        }
    }
}














//Switch to next menu

function toMenu1() {
        menuIndex = 1;

        troopCapacity = parseInt(troopInput.value());
        spellCapacity = parseInt(spellInput.value());
        ccTroopCapacity = parseInt(ccTroopInput.value());
        ccSpellCapacity = parseInt(ccSpellInput.value());

        if (!troopCapacity) {
            troopCapacity = 0;
        }
        if (!spellCapacity) {
            spellCapacity = 0;
        }
        if (!ccTroopCapacity) {
            ccTroopCapacity = 0;
        }
        if (!ccSpellCapacity) {
            ccSpellCapacity = 0;
        }


        troopInput.remove();
        spellInput.remove();
        ccTroopInput.remove();
        ccSpellInput.remove();

        nextButton.action = toMenu2;
}


function toMenu2() {
    menuIndex = 2;

    nextButton.action = toMenu3;
    backButton.action = toMenu1;
}


function toMenu3() {
    menuIndex = 3;

    nextButton.action = toMenu4;
    backButton.action = toMenu2;
}

function toMenu4() {
    menuIndex = 4;

    nextButton.action = toMenu5;
    backButton.action = toMenu3;
}

function toMenu5() {
    menuIndex = 5;

    nextButton.action = toMenu6;
    backButton.action = toMenu4;
}

function toMenu6() {
    menuIndex = 6;

    nextButton.action = toMenu7;
    backButton.action = toMenu5;
}

function toMenu7() {
    menuIndex = 7;

    army = randomArmy(troopCapacity, ccTroopCapacity, spellCapacity, ccSpellCapacity, selectedTroop, selectedDarkTroop, selectedSpell, selectedDarkSpell, selectedSiegeMachine, selectedSuperTroops);

    nextButton.action = toMenu8;
    backButton.action = toMenu6;
}

function toMenu8() {
    menuIndex = 8;

    nextButton.action = toMenu9;
    backButton.action = toMenu7;
}

function toMenu9() {
    menuIndex = 9;

    nextButton.action = toMenu10;
    backButton.action = toMenu8;
}

function toMenu10() {
    menuIndex = 10;

    nextButton.action = toMenu11;
    backButton.action = toMenu9;
}

function toMenu11() {
    menuIndex = 11;

    nextButton.action = toMenu12;
    backButton.action = toMenu10;
}

function toMenu12() {
    menuIndex = 12;

    nextButton.action = toMenu13;
    backButton.action = toMenu11;
}

function toMenu13() {
    menuIndex = 13;

    nextButton.action = toMenu14;
    backButton.action = toMenu12;
}

function toMenu14() {
    menuIndex = 14;

    backButton.action = toMenu13;
}