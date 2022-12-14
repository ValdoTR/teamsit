/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    // LE JARDIN
    WA.room.onEnterLayer('doorSteps').subscribe(() => {
        WA.room.showLayer("openDoors")
    })
    WA.room.onLeaveLayer('doorSteps').subscribe(() => {
        WA.room.hideLayer("openDoors")
    })

    WA.room.area.onEnter('signLeft').subscribe(() => {
        currentPopup = WA.ui.openPopup("signLeftPopup","Web3, Lifestyle",[]);
    })
    WA.room.area.onLeave('signLeft').subscribe(closePopup)

    WA.room.area.onEnter('signRight').subscribe(() => {
        currentPopup = WA.ui.openPopup("signRightPopup","Innovation, Santé, Entrepreneur",[]);
    })
    WA.room.area.onLeave('signRight').subscribe(closePopup)

    // LE LOUNGE - Rooftop
    WA.room.area.onEnter('doorStep').subscribe(() => {
        WA.room.showLayer("openDoor")
    })
    WA.room.area.onLeave('doorStep').subscribe(() => {
        WA.room.hideLayer("openDoor")
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');

        // LE LOUNGE - Cinéma
        const today = new Date().getDate()
        // Sunday (0) to Saturday (6)
        const mapDayToVariable = [
            "filmDuDimanche",
            "filmDuLundi",
            "filmDuMardi",
            "filmDuMercredi",
            "filmDuJeudi",
            "filmDuVendredi",
            "filmDuSamedi",
        ]

        WA.state.filmDuJour = WA.state.loadVariable(mapDayToVariable[today])
    
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
