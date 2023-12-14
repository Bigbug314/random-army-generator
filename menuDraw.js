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
    text("Select the highest troop you have", 450*k, 50*k);

    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedTroop; i++) {
        let x = 25*k + (95*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 85*k, 85*k, 10*k);
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
    text("Select the highest dark troop you have", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedDarkTroop; i++) {
        let x = 25*k + (95*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 85*k, 85*k, 10*k);
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
    text("Select the highest spell you have", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedSpell; i++) {
        let x = 25*k + (95*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 85*k, 85*k, 10*k);
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
    text("Select the highest dark spell you have", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedDarkSpell; i++) {
        let x = 25*k + (95*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 85*k, 85*k, 10*k);
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
    text("Select the highest siege machine you can get", 450*k, 50*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < selectedSiegeMachine; i++) {
        let x = 25*k + (95*k*parseInt(i/2));
        let y;
        if (i % 2 == 0) {
            y = 130*k;
        } else {
            y = 230*k;
        }

        rect(x, y, 85*k, 85*k, 10*k);
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

    textSize(15*k);
    textAlign(LEFT, CENTER)
    text("-Already have super troop boosted \n-Don't have enough dark elixir to boost super troops", 450*k, 128*k);


    //Selection rect
    fill(50, 255, 50);
    strokeWeight(0);
    for (let i = 0; i < 16; i++) {
        if (selectedSuperTroops.includes(i)) {
            let x = 25*k + (95*k*parseInt(i/2));
            let y;
            if (i % 2 == 0) {
                y = 160*k;
            } else {
                y = 260*k;
            }

            rect(x, y, 85*k, 85*k, 10*k);
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

    //Next button
    nextButton.draw();
    //Back button
    backButton.draw();
}



function drawArmy() {
    textAlign(CENTER, CENTER);
    textSize(40*k);
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(0, 0, 0);

    //Title
    text("Army:", 450*k, 50*k);

    //Texts
    textSize(20*k);
    textAlign(LEFT, CENTER);
    text("Troops:", 80*k, 100*k);
    text("Spells:", 600*k, 100*k);
    text("CC Troops:", 80*k, 250*k);
    text("CC Spells:", 600*k, 250*k);
    text("Siege Machine:", 380*k, 320*k);


    textAlign(CENTER, CENTER);

    //Troops
    let n = 0;
    for (let i = 0; i < army.troops.length + army.darkTroops.length + army.superTroops.length; i++) {
        //Elixir troops
        if (i < army.troops.length) {
            if (army.troops[i] != 0) {
                let x = 90*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 125*k;
                } else {
                    y = 175*k;
                }

                image(images.troops[i], x, y, 45*k, 45*k);

                textSize(25*k);
                fill(255, 0, 0);
                text(army.troops[i].toString(), x+22.5*k, y+22.5*k);

                n += 1;
            }
        }
        //Dark elixir troops
        else if (i < army.troops.length + army.darkTroops.length) {
            if (army.darkTroops[i - army.troops.length] != 0) {
                let x = 90*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 125*k;
                } else {
                    y = 175*k;
                }
    
                image(images.darktroops[i - army.troops.length], x, y, 45*k, 45*k);
    
                textSize(25*k);
                fill(255, 0, 0);
                text(army.darkTroops[i - army.troops.length].toString(), x+22.5*k, y+22.5*k);
    
                n += 1;
            }
        }
        //Super troops
        else {
            if (army.superTroops[i - army.troops.length - army.darkTroops.length] != 0) {
                let x = 90*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 125*k;
                } else {
                    y = 175*k;
                }
    
                image(images.supertroops[i - army.troops.length - army.darkTroops.length], x, y, 45*k, 45*k);
    
                textSize(25*k);
                fill(255, 0, 0);
                text(army.superTroops[i - army.troops.length - army.darkTroops.length].toString(), x+22.5*k, y+22.5*k);
    
                n += 1;
            }
        }
    }



    //Spells
    n = 0;
    for (let i = 0; i < army.spells.length + army.darkSpells.length; i++) {
        //Elixir spells
        if (i < army.spells.length) {
            if (army.spells[i] != 0) {
                let x = 610*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 125*k;
                } else {
                    y = 175*k;
                }

                image(images.spells[i], x, y, 45*k, 45*k);

                textSize(25*k);
                fill(255, 0, 0);
                text(army.spells[i].toString(), x+22.5*k, y+22.5*k);

                n += 1;
            }
        }
        //Dark spells
        else {
            if (army.darkSpells[i - army.spells.length] != 0) {
                let x = 610*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 125*k;
                } else {
                    y = 175*k;
                }
    
                image(images.darkspells[i - army.spells.length], x, y, 45*k, 45*k);
    
                textSize(25*k);
                fill(255, 0, 0);
                text(army.darkSpells[i - army.spells.length].toString(), x+22.5*k, y+22.5*k);
    
                n += 1;
            }
        }
    }




    //CC Troops
    n = 0;
    for (let i = 0; i < army.ccTroops.length + army.ccDarkTroops.length + army.ccSuperTroops.length; i++) {
        //Elixir troops
        if (i < army.ccTroops.length) {
            if (army.ccTroops[i] != 0) {
                let x = 90*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 275*k;
                } else {
                    y = 325*k;
                }

                image(images.troops[i], x, y, 45*k, 45*k);

                textSize(25*k);
                fill(255, 0, 0);
                text(army.ccTroops[i].toString(), x+22.5*k, y+22.5*k);

                n += 1;
            }
        }
        //Dark elixir troops
        else if (i < army.ccTroops.length + army.ccDarkTroops.length) {
            if (army.ccDarkTroops[i - army.ccTroops.length] != 0) {
                let x = 90*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 275*k;
                } else {
                    y = 325*k;
                }
    
                image(images.darktroops[i - army.ccTroops.length], x, y, 45*k, 45*k);
    
                textSize(25*k);
                fill(255, 0, 0);
                text(army.ccDarkTroops[i - army.ccTroops.length].toString(), x+22.5*k, y+22.5*k);
    
                n += 1;
            }
        }
        //Super troops
        else {
            if (army.ccSuperTroops[i - army.ccTroops.length - army.ccDarkTroops.length] != 0) {
                let x = 90*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 275*k;
                } else {
                    y = 325*k;
                }
    
                image(images.supertroops[i - army.ccTroops.length - army.ccDarkTroops.length], x, y, 45*k, 45*k);
    
                textSize(25*k);
                fill(255, 0, 0);
                text(army.ccSuperTroops[i - army.ccTroops.length - army.ccDarkTroops.length].toString(), x+22.5*k, y+22.5*k);
    
                n += 1;
            }
        }
    }


    //CC Spells
    n = 0;
    for (let i = 0; i < army.ccSpells.length + army.ccDarkSpells.length; i++) {
        //Elixir spells
        if (i < army.ccSpells.length) {
            if (army.ccSpells[i] != 0) {
                let x = 610*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 275*k;
                } else {
                    y = 325*k;
                }

                image(images.spells[i], x, y, 45*k, 45*k);

                textSize(25*k);
                fill(255, 0, 0);
                text(army.ccSpells[i].toString(), x+22.5*k, y+22.5*k);

                n += 1;
            }
        }
        //Dark spells
        else {
            if (army.ccDarkSpells[i - army.ccSpells.length] != 0) {
                let x = 610*k + (48*k*parseInt(n/2));
                let y;
                if (n % 2 == 0) {
                    y = 275*k;
                } else {
                    y = 325*k;
                }
    
                image(images.darkspells[i - army.ccSpells.length], x, y, 45*k, 45*k);
    
                textSize(25*k);
                fill(255, 0, 0);
                text(army.ccDarkSpells[i - army.ccSpells.length].toString(), x+22.5*k, y+22.5*k);
    
                n += 1;
            }
        }
    }

    //Siege machine
    if (army.siegeMachine != -1) {
        image(images.siegemachine[army.siegeMachine], 427.5*k, 350*k, 45*k, 45*k);
    }



    //Back button
    backButton.draw();
}