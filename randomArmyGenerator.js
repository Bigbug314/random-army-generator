const troopsC = [1, 1, 5, 1, 2, 5, 4, 14, 20, 25, 10, 6, 30, 18, 25];
const darkTroopsC = [2, 5, 8, 30, 12, 30, 6, 15, 6];
const spellsC = [1, 2, 2, 2, 1, 3, 1];
const darkSpellsC = [1, 1, 1, 1, 1];
const superTroopsC = [5, 12, 10, 3, 8, 12, 10, 40, 15, 12, 20, 40, 40, 30];



let troops;
let darkTroops;
let spells;
let darkSpells;
let superTroops;
let ccTroops;
let ccDarkTroops;
let ccSpells;
let ccDarkSpells;
let siegeMachine;




function randomArmy(troopCap, ccTroopCap, spellCap, ccSpellCap, sTroop, sDTroop, sSpell, sDSpell, sMachine, sSTroop) {
    //Init variables
    troops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    darkTroops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    spells = [0, 0, 0, 0, 0 ,0, 0];
    darkSpells = [0, 0, 0, 0, 0];
    superTroops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    ccTroops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ccDarkTroops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ccSpells = [0, 0, 0, 0 ,0, 0, 0];
    ccDarkSpells = [0, 0, 0, 0, 0];
    ccSuperTroops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //Siege machine
    if (sMachine > 0) {
        siegeMachine = Math.round(random(0, sMachine));
    } else {
        siegeMachine = -1;
    }

    //Select max 2 super troops
    let twoSSTroop = [];
    if (sSTroop.length > 0) {
        if (sSTroop.length == 1) {
            twoSSTroop = sSTroop;
        } else {
            while (twoSSTroop.length < 2) {
                let n = Math.round(random(0, sSTroop.length));
                let randS = sSTroop[n];
                if (!twoSSTroop.includes(randS)) {
                    twoSSTroop.push(randS);
                }
            }
        }
    }
    


    //Troops / DarkTroops / SuperTroops
    let currentCapacity = 0;
    while (currentCapacity < troopCap) {
        let n = Math.round(random(0, sTroop+sDTroop+twoSSTroop.length));

        if (n < sTroop) {
            if (currentCapacity + troopsC[n] <= troopCap) {
                troops[n]++;
                currentCapacity += troopsC[n];
            }
        } else if (n < sDTroop+sTroop) {
            if (currentCapacity + darkTroopsC[n-sTroop] <= troopCap) {
                darkTroops[n-sTroop]++;
                currentCapacity += darkTroopsC[n-sTroop];
            }
        } else {
            if (currentCapacity + superTroopsC[twoSSTroop[n-sTroop-sDTroop]] <= troopCap) {
                superTroops[twoSSTroop[n-sTroop-sDTroop]]++;
                currentCapacity += superTroopsC[twoSSTroop[n-sTroop-sDTroop]];
            }
        }
    }
    console.log(superTroops);

    //Spells / DarkSpells
    currentCapacity = 0
    while (currentCapacity < spellCap) {
        //Safety
        if (sSpell == 0 && sDSpell == 0 && spellCap != 0) {
            break;
        }

        let n = Math.round(random(0, sSpell+sDSpell));

        if (n < sSpell) {
            if (currentCapacity + spellsC[n] <= spellCap) {
                spells[n]++;
                currentCapacity += spellsC[n];
            }
        } else {
            if (currentCapacity + darkSpellsC[n-sSpell] <= spellCap) {
                darkSpells[n-sSpell]++;
                currentCapacity += darkSpellsC[n-sSpell];
            }
        }
    }




    //ccTroops / ccDarkTroops / ccSuperTroops
    currentCapacity = 0;
    while (currentCapacity < ccTroopCap) {
        let n = Math.round(random(0, sTroop+sDTroop+sSTroop.length));

        if (n < sTroop) {
            if (currentCapacity + troopsC[n] <= ccTroopCap) {
                ccTroops[n]++;
                currentCapacity += troopsC[n];
            }
        } else if (n < sDTroop+sTroop) {
            if (currentCapacity + darkTroopsC[n-sTroop] <= ccTroopCap) {
                ccDarkTroops[n-sTroop]++;
                currentCapacity += darkTroopsC[n-sTroop];
            }
        } else {
            if (currentCapacity + superTroopsC[sSTroop[n-sTroop-sDTroop]] <= ccTroopCap) {
                ccSuperTroops[sSTroop[n-sTroop-sDTroop]]++;
                currentCapacity += superTroopsC[sSTroop[n-sTroop-sDTroop]];
            }
        }
    }


    //ccSpells / ccDarkSpells
    currentCapacity = 0
    while (currentCapacity < ccSpellCap) {
        //Safety
        if (sSpell == 0 && sDSpell == 0 && ccSpellCap != 0) {
            break;
        }

        let n = Math.round(random(0, sSpell+sDSpell));

        if (n < sSpell) {
            if (currentCapacity + spellsC[n] <= ccSpellCap) {
                ccSpells[n]++;
                currentCapacity += spellsC[n];
            }
        } else {
            if (currentCapacity + darkSpellsC[n-sSpell] <= ccSpellCap) {
                ccDarkSpells[n-sSpell]++;
                currentCapacity += darkSpellsC[n-sSpell];
            }
        }
    }

    return {
        troops: troops,
        darkTroops: darkTroops,
        spells: spells,
        darkSpells: darkSpells,
        superTroops: superTroops,
        ccTroops: ccTroops,
        ccDarkTroops: ccDarkTroops,
        ccSpells: ccSpells,
        ccDarkSpells: ccDarkSpells,
        ccSuperTroops: ccSuperTroops,
        siegeMachine: siegeMachine
    };
}