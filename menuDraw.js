function drawCapacitySelection() {
    textAlign(CENTER, CENTER);
    textSize(25*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Texts
    text("Your troop capacity:", 170*k, 50*k);
    text("Your spell capacity:", 610*k, 50*k);
    text("Your cc troop capacity:", 170*k, 250*k);
    text("Your cc spell capacity:", 610*k, 250*k);

    //Next button
    nextButton.draw();
}


function drawTroopSelection() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Select the best troop you have", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedTroop; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 90*k, 90*k, 10*k);
    }

    //Images
    for (let button of troopButtons) {
        button.draw();
    }

    //Next button
    nextButton.draw();
}

function drawDarkTroopSelection() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Select the best dark troop you have", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedDarkTroop; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 90*k, 90*k, 10*k);
    }

    //Images
    for (let button of darkTroopButtons) {
        button.draw();
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}


function drawSpellSelection() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Select the best spell you have", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedSpell; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 90*k, 90*k, 10*k);
    }

    //Images
    for (let button of spellButtons) {
        button.draw();
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}


function drawDarkSpellSelection() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Select the best dark spell you have", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedDarkSpell; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 90*k, 90*k, 10*k);
    }

    //Images
    for (let button of darkSpellButtons) {
        button.draw();
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}


function drawSiegeMachineSelection() {
    textAlign(CENTER, CENTER);
    textSize(35*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Select the best siege machine you can get", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedSiegeMachine; i++) {
        let x = 55*k + (100*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 90*k, 90*k, 10*k);
    }

    //Images
    for (let button of siegeMachineButtons) {
        button.draw();
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}


function drawSuperTroopSelection() {
    textAlign(CENTER, CENTER);
    textSize(35*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Select all the super troops\nyou have (maximum two will be chosen)", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < 14; i++) {
        if (selectedSuperTroops.includes(i)) {
            let x = 55*k + (100*k*parseInt(i/2));
            let y;
            if (i % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            rect(x, y, 90*k, 90*k, 10*k);
        }
    }

    //Images
    for (let button of superTroopButtons) {
        button.draw();
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}




function drawTroop() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Elixir Troops", 450*k, 50*k);

    let n = 0;
    for (let i = 0; i < army.troops.length; i++) {
        if (army.troops[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.troops[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.troops[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}



function drawDarkTroop() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Dark Elixir Troops", 450*k, 50*k);

    let n = 0;
    for (let i = 0; i < army.darkTroops.length; i++) {
        if (army.darkTroops[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.darktroops[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.darkTroops[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}


function drawSuperTroop() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Super Troops", 450*k, 50*k);

    let n = 0;
    for (let i = 0; i < army.superTroops.length; i++) {
        if (army.superTroops[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.supertroops[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.superTroops[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}



function drawSpell() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Elixir Spells", 450*k, 50*k);

    let n = 0;
    for (let i = 0; i < army.spells.length; i++) {
        if (army.spells[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.spells[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.spells[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}



function drawDarkSpell() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Dark Elixir Spells", 450*k, 50*k);

    let n = 0;
    for (let i = 0; i < army.darkSpells.length; i++) {
        if (army.darkSpells[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.darkspells[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.darkSpells[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}






function drawccTroop() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("CC Troops", 450*k, 50*k);

    let n = 0;
    for (let i = 0; i < army.ccTroops.length; i++) {
        if (army.ccTroops[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.troops[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.ccTroops[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    for (let i = 0; i < army.ccDarkTroops.length; i++) {
        if (army.ccDarkTroops[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.darktroops[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.ccDarkTroops[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    for (let i = 0; i < army.ccSuperTroops.length; i++) {
        if (army.ccSuperTroops[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.supertroops[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.ccSuperTroops[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}



function drawccSpell() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("CC Spells", 450*k, 50*k);

    let n = 0;
    for (let i = 0; i < army.ccSpells.length; i++) {
        if (army.ccSpells[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.spells[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.ccSpells[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    for (let i = 0; i < army.ccDarkSpells.length; i++) {
        if (army.ccDarkSpells[i] != 0) {
            let x = 55*k + (100*k*parseInt(n/2));
            let y;
            if (n % 2 == 0) {
                y = 130*k;
            } else {
                y = 230*k;
            }

            image(images.darkspells[i], x, y, 90*k, 90*k);

            textSize(50*k);
            fill(255, 0, 0);
            text(army.ccDarkSpells[i].toString(), x+45*k, y+45*k);

            n += 1;
        }
    }

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}



function drawSiegeMachine() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Siege machine", 450*k, 50*k);

    if (army.siegeMachine != -1) {
        image(images.siegemachine[army.siegeMachine], 405*k, 225*k, 90*k, 90*k);
    }

    //Back button
    backButton.draw();
}