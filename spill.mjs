//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(hovedside);
function hovedside() {

    const bakgrunn = new Blocks.Image("bilder/hovedbilde.jpg", { x: 25, y: 75, width: 820, height: 820 });

    // Knapp for å gå til spørsmål om god venn
    const hvaerengodvennKnapp = new Blocks.Image("", { x: 530, y: 820, width: 30, height: 30 });
    Actions.Click(hvaerengodvennKnapp, () => { GaaTil(scene2); })
    // Knapp for å gå til spørsmål om brann
    const detbrenneriskogen = new Blocks.Image("", { x: 470, y: 480, width: 30, height: 30 });
    Actions.Click(detbrenneriskogen, () => { GaaTil(scene3); })

    const lekeplass = new Blocks.Image("", { x: 760, y: 230, width: 30, height: 30 });
    Actions.Click(lekeplass, () => { GaaTil(scene4); })

    const gymsalen = new Blocks.Image("", { x: 620, y: 210, width: 30, height: 30 });
    Actions.Click(gymsalen, () => { GaaTil(scene5); })

    const gaaoverveien = new Blocks.Image("", { x: 510, y: 290, width: 30, height: 30 });
    Actions.Click(gaaoverveien, () => { GaaTil(scene6); })

    const vaereenvenn = new Blocks.Image("", { x: 300, y: 360, width: 30, height: 30 });
    Actions.Click(vaereenvenn, () => { GaaTil(scene7); })

    const trafikklys = new Blocks.Image("", { x: 350, y: 720, width: 30, height: 30 });
    Actions.Click(trafikklys, () => { GaaTil(scene8); })

    const laerepåskolen = new Blocks.Image("", { x: 510, y: 620, width: 30, height: 30 });
    Actions.Click(laerepåskolen, () => { GaaTil(scene9); })

    const laerersnakker = new Blocks.Image("", { x: 320, y: 620, width: 30, height: 30 });
    Actions.Click(laerersnakker, () => { GaaTil(scene10); })

    const hvilkefag = new Blocks.Image("", { x: 200, y: 230, width: 30, height: 30 });
    Actions.Click(hvilkefag, () => { GaaTil(scene11); })

    const hvaglederdudegtil = new Blocks.Image("", { x: 70, y: 300, width: 30, height: 30 });
    Actions.Click(hvaglederdudegtil, () => { GaaTil(scene12); })

    const kjope = new Blocks.Image("", { x: 60, y: 510, width: 30, height: 30 });
    Actions.Click(kjope, () => { GaaTil(scene13); })

    const mat = new Blocks.Image("", { x: 160, y: 550, width: 30, height: 30 });
    Actions.Click(mat, () => { GaaTil(scene14); })

    const hvilkenskole = new Blocks.Image("", { x: 230, y: 820, width: 30, height: 30 });
    Actions.Click(hvilkenskole, () => { GaaTil(scene15); })

    const hvaerlekser = new Blocks.Image("", { x: 410, y: 820, width: 30, height: 30 });
    Actions.Click(hvaerlekser, () => { GaaTil(scene16); })

    const lekemed = new Blocks.Image("", { x: 700, y: 640, width: 30, height: 30 });
    Actions.Click(lekemed, () => { GaaTil(scene17); })

    const friminutt = new Blocks.Image("", { x: 670, y: 340, width: 30, height: 30 });
    Actions.Click(friminutt, () => { GaaTil(scene18); })

    const rodtlys = new Blocks.Image("", { x: 440, y: 210, width: 30, height: 30 });
    Actions.Click(rodtlys, () => { GaaTil(scene19); })

    const tilskolen = new Blocks.Image("", { x: 150, y: 690, width: 30, height: 30 });
    Actions.Click(tilskolen, () => { GaaTil(scene20); })

    const soppel = new Blocks.Image("", { x: 270, y: 635, width: 30, height: 30 });
    Actions.Click(soppel, () => { GaaTil(scene21); })

    const bekken = new Blocks.Image("", { x: 380, y: 640, width: 30, height: 30 });
    Actions.Click(bekken, () => { GaaTil(scene22); })

    const hvemborhvor = new Blocks.Image("", { x: 610, y: 510, width: 30, height: 30 });
    Actions.Click(hvemborhvor, () => { GaaTil(scene23); })

    const ekorn = new Blocks.Image("", { x: 440, y: 400, width: 30, height: 30 });
    Actions.Click(ekorn, () => { GaaTil(scene24); })


    const gymsal = new Blocks.Image("", { x: 380, y: 310, width: 30, height: 30 });
    Actions.Click(gymsal, () => { GaaTil(scene25); })

    const plaster = new Blocks.Image("", { x: 340, y: 220, width: 30, height: 30 });
    Actions.Click(plaster, () => { GaaTil(scene26); })

    const raskest = new Blocks.Image("", { x: 750, y: 420, width: 30, height: 30 });
    Actions.Click(raskest, () => { GaaTil(scene27); })

    const regnsky = new Blocks.Image("", { x: 650, y: 255, width: 30, height: 30 });
    Actions.Click(regnsky, () => { GaaTil(scene28); })

    const snøsky = new Blocks.Image("", { x: 175, y: 390, width: 30, height: 30 });
    Actions.Click(snøsky, () => { GaaTil(scene29); })

    const snakkeiklassen = new Blocks.Image("", { x: 95, y: 635, width: 30, height: 30 });
    Actions.Click(snakkeiklassen, () => { GaaTil(scene30); })

    const klasserom = new Blocks.Image("", { x: 125, y: 775, width: 30, height: 30 });
    Actions.Click(klasserom, () => { GaaTil(scene31); })

}
// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "brødtekst", x: 0, y: 0, width: 20, height: 20 });
    Actions.Click(velkommen, () => {
        GaaTil(scene2);
    })
}

function scene2() {
    const nyTekst = new Blocks.Text("Hva er en god venn? ", { style: "brødtekt", x: 100, y: 0, width: 800, height: 0 });
    Actions.Click(nyTekst, () => {
        GaaTil(hovedside);
    })

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)
}

function scene3() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt5 = new Blocks.Text("Det brenner i skogen, hvem ringer du?", { style: "brødtekst", x: 100, y: 0, width: -100, height: 0 });
    const img110 = new Blocks.Image("bilder/110.png", { x: 100, y: 500, width: 200, height: 200 });
    const img10 = new Blocks.Image("bilder/112.png", { x: 400, y: 500, width: 200, height: 200 });
    const img11 = new Blocks.Image("bilder/113.png", { x: 700, y: 500, width: 200, height: 200 });

    Actions.Click(img110, () => {
        GaaTil(hovedside);
    })

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene4() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt12 = new Blocks.Text("Hva liker du å leke med på lekeplassen?", { style: "brødtekst", x: 100, y: 0, width: -100, height: 0 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene5() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt13 = new Blocks.Text("Hva kan du gjøre i en gymsal?", { style: "brødtekst", x: 100, y: 0, width: -100, height: -100 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)


}

function scene6() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt14 = new Blocks.Text("Hva er det viktig å huske på før man går over veien? ", { style: "brødtekst", x: 100, y: 0, width: -300, height: -200 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene7() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt15 = new Blocks.Text("Hvordan skal man være mot vennene sine? ", { style: "brødtekst", x: 10, y: 0, width: -500, height: 0 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)


}

function scene8() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt16 = new Blocks.Text("Hvilket lys betyr at man kan gå over? ", { style: "brødtekst", x: 100, y: 0, width: -300, height: 100 });
    const img17 = new Blocks.Image("bilder/trafikklys.jpg", { x: 100, y: 400, width: 500, height: 500 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene9() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt20 = new Blocks.Text("Hva tror du du kommer til å lære på skolen? ", { style: "brødtekst", x: 100, y: 0, width: -300, height: 100 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene10() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt23 = new Blocks.Text("Når læreren snakker, hva skal du gjøre? ", { style: "brødtekst", x: 100, y: 0, width: -300, height: 100 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene11() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt24 = new Blocks.Text("Hvilke fag har man på skolen? ", { style: "brødtekst", x: 100, y: 0, width: -100, height: 100 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene12() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt25 = new Blocks.Text("Fortell hva du gleder deg mest til med å begynne på skolen. ", { style: "brødtekst", x: 100, y: 0, width: -700, height: 100 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}
function scene13() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt26 = new Blocks.Text("Er det noe du ønsker å kjøpe før du begynner på skolen? ", { style: "brødtekst", x: 100, y: 0, width: -400, height: 100 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)


}

function scene14() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt27 = new Blocks.Text("Hva liker du å ha på brødskiva? ", { style: "brødtekst", x: 100, y: 0, width: -300, height: 100 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene15() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt28 = new Blocks.Text("Hvilken skole skal du begynne på? ", { style: "brødtekst", x: 100, y: 0, width: -300, height: 100 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene16() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt29 = new Blocks.Text("Hva er lekser? ", { style: "brødtekst", x: 100, y: 0, width: 100, height: 100 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)


}

function scene17() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt30 = new Blocks.Text("Hva liker du å leke med? ", { style: "brødtekst", x: 100, y: 0, width: -300, height: 100 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene18() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt31 = new Blocks.Text("Hva heter pausene på skolen? ", { style: "brødtekst", x: 0, y: 0, width: -300, height: 100 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene19() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt32 = new Blocks.Text("Hva betyr rødt lys? ", { style: "brødtekst", x: 100, y: 0, width: -200, height: 100 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene20() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt33 = new Blocks.Text("Hvordan kommer man seg til skolen? ", { style: "brødtekst", x: 100, y: 0, width: -300, height: 100 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene21() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt34 = new Blocks.Text("Noen har kastet søppel i skogen – kast søppelet i søppelbøtta", { style: "brødtekst", x: 100, y: 100, width: -1100, height: 100 });
    const søppelbøtte = new Blocks.Image("bilder/søppelbøtte.png", { x: 100, y: 500, width: 200, height: 200 });
    const søppel = new Blocks.Image("bilder/søppel.png", { x: 500, y: 500, width: 200, height: 200 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 100, y: 0, width: 200, height: 200 });
    Actions.Drag(søppel)

    Actions.Colide(søppel, søppelbøtte, søppelibøtta)
    function søppelibøtta() {
        søppel.hide()

    }

    gåTilHovedsiden(hjem);
}

function gåTilHovedsiden(etObjektÅtrykkePå) {
    Actions.Click(etObjektÅtrykkePå, () => {
        GaaTil(hovedside)
    })
}
function scene22() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt37 = new Blocks.Text("Du vil hoppe i bekken – hvilke sko er lurt å bruke? - sandaler, støvler, joggesko? ", { style: "brødtekst", x: 200, y: 0, width: "100%", height: 0 });
    const img38 = new Blocks.Image("bilder/sandaler.jpg", { x: 100, y: 400, width: 300, height: 300 });
    const img39 = new Blocks.Image("bilder/sko.jpg", { x: 500, y: 400, width: 300, height: 300 });
    const img40 = new Blocks.Image("bilder/støvler.jpg", { x: 800, y: 400, width: 300, height: 300 });
    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });

    Actions.Click(img40, () => {
        GaaTil(hovedside);
    })

    gåTilHovedsiden(hjem)
}

function scene23() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt41 = new Blocks.Text("hvem bor hvor?", { style: "brødtekst", x: 100, y: 0, width: 100, height: 100 });
    const fugl = new Blocks.Image("bilder/fugl.jpg", { x: 100, y: 250, width: 200, height: 200 });
    const img43 = new Blocks.Image("bilder/fuglehus.jpg", { x: 50, y: 500, width: 200, height: 200 });
    const bille = new Blocks.Image("bilder/bille.jpg", { x: 450, y: 300, width: 200, height: 200 });
    const img45 = new Blocks.Image("bilder/stubbe.jpg", { x: 300, y: 500, width: 200, height: 200 });
    const img46 = new Blocks.Image("bilder/dam.jpg", { x: 500, y: 500, width: 200, height: 200 });
    const fisk = new Blocks.Image("bilder/fisk.jpg", { x: 700, y: 250, width: 200, height: 200 });
    const maur = new Blocks.Image("bilder/maur.jpg", { x: 500, y: 100, width: 200, height: 200 });
    const img49 = new Blocks.Image("bilder/maurtue.jpg", { x: 750, y: 500, width: 200, height: 200 });
    Actions.Drag(fugl)
    Actions.Drag(maur)
    Actions.Drag(fisk)
    Actions.Drag(bille)

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene24() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt50 = new Blocks.Text("Hva spiser ekornet? dra maten til ekornet ", { style: "brødtekst", x: 300, y: 0, width: 100, height: 100 });
    const img51 = new Blocks.Image("bilder/ekorn.jpg", { x: 200, y: 400, width: 200, height: 200 });
    const img52 = new Blocks.Image("bilder/meitemark.jpg", { x: 400, y: 400, width: 200, height: 200 });
    const img53 = new Blocks.Image("bilder/banan.jpg", { x: 600, y: 400, width: 200, height: 200 });
    const hasselnott = new Blocks.Image("bilder/hasselnøtt.jpg", { x: 600, y: 600, width: 200, height: 200 });
    Actions.Drag(hasselnott)

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)


}

function scene25() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt54 = new Blocks.Text("hva kan du gjøre i en gymsal?", { style: "brødtekst", x: 200, y: 0, width: 300, height: 100 });

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene26() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt55 = new Blocks.Text("Ånei du falt ned fra klatrestativet og begynte å blø - vi må stoppe blødningen, hva må vi bruke?", { style: "brødtekst", x: 200, y: 0, width: -200, height: -100 });
    const img56 = new Blocks.Image("bilder/gråter.jpg", { x: 0, y: 500, width: 200, height: 200 });
    const img57 = new Blocks.Image("bilder/hammer.jpg", { x: 200, y: 300, width: 200, height: 200 });
    const img58 = new Blocks.Image("bilder/kniver.jpg", { x: 400, y: 400, width: 200, height: 200 });
    const plaster = new Blocks.Image("bilder/plaster.jpg", { x: 600, y: 600, width: 200, height: 200 });
    Actions.Drag(plaster)


    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene27() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt60 = new Blocks.Text("hva er raskest?", { style: "brødtekst", x: 200, y: 0, width: 100, height: 100 });
    const img61 = new Blocks.Image("bilder/fly.jpg", { x: 100, y: 400, width: 200, height: 200 });
    const img62 = new Blocks.Image("bilder/bil.jpg", { x: 350, y: 400, width: 200, height: 200 });
    const img63 = new Blocks.Image("bilder/sykkel.jpg", { x: 600, y: 400, width: 200, height: 200 });

    Actions.Click(img61, () => {
        GaaTil(hovedside);
    })

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)


}

function scene28() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt64 = new Blocks.Text("Det regner ute, hva tar du på deg?", { style: "brødtekst", x: 300, y: 0, width: 100, height: 100 });
    const img65 = new Blocks.Image("bilder/regnsky.jpg", { x: 100, y: 200, width: 200, height: 200 });
    const img66 = new Blocks.Image("bilder/jenteplaske.jpg", { x: 300, y: 400, width: 200, height: 200 });
    const img67 = new Blocks.Image("bilder/guttogjente.jpg", { x: 500, y: 400, width: 200, height: 200 });
    const img68 = new Blocks.Image("bilder/guttmedball.jpg", { x: 700, y: 400, width: 200, height: 200 });


    Actions.Click(img66, () => {
        GaaTil(hovedside);
    })

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene29() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt69 = new Blocks.Text("det er kaldt og snør, hva tar du på deg?", { style: "brødtekst", x: 400, y: 0, width: 100, height: 100 });
    const img70 = new Blocks.Image("bilder/snø.jpg", { x: 200, y: 200, width: 200, height: 200 });
    const img71 = new Blocks.Image("bilder/jenteplaske.jpg", { x: 200, y: 400, width: 200, height: 200 });
    const img72 = new Blocks.Image("bilder/guttogjente.jpg", { x: 400, y: 400, width: 200, height: 200 });
    const img73 = new Blocks.Image("bilder/guttmedball.jpg", { x: 600, y: 400, width: 200, height: 200 });

    Actions.Click(img72, () => {
        GaaTil(hovedside);
    })

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)


}

function scene30() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt74 = new Blocks.Text("Hvis du ønsker å si noe i klassen, Hva skal du gjøre? Bare snakke, skrike, ta opp hånden? ", { style: "brødtekst", x: 300, y: 0, width: 200, height: 100 });
    const img75 = new Blocks.Image("bilder/skriker.png", { x: 300, y: 400, width: 200, height: 200 });
    const img76 = new Blocks.Image("bilder/rekkeopp.png", { x: 500, y: 400, width: 200, height: 200 });

    Actions.Click(img76, () => {
        GaaTil(hovedside);
    })

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)

}

function scene31() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt77 = new Blocks.Text("hva kan man finne i et klasserom? samle tingene", { style: "brødtekst", x: 300, y: 0, width: 200, height: 100 });
    const ku = new Blocks.Image("bilder/ku.png", { x: 200, y: 450, width: 100, height: 100 });
    const stol = new Blocks.Image("bilder/stol.png", { x: 300, y: 300, width: 100, height: 100 });
    const tavle = new Blocks.Image("bilder/tavle.png", { x: 400, y: 350, width: 100, height: 100 });
    const traktor = new Blocks.Image("bilder/traktor.png", { x: 500, y: 400, width: 100, height: 100 });
    const flaske = new Blocks.Image("bilder/flaske.png", { x: 600, y: 450, width: 100, height: 100 });
    const sekk = new Blocks.Image("bilder/sekk.png", { x: 700, y: 500, width: 100, height: 100 });
    const toalett = new Blocks.Image("bilder/do.png", { x: 500, y: 600, width: 100, height: 100 });

    Actions.Drag(ku)
    Actions.Drag(stol)
    Actions.Drag(tavle)
    Actions.Drag(traktor)
    Actions.Drag(flaske)
    Actions.Drag(sekk)
    Actions.Drag(toalett)

    const hjem = new Blocks.Image("bilder/hus.png", { x: 0, y: 0, width: 100, height: 100 });
    gåTilHovedsiden(hjem)
}
