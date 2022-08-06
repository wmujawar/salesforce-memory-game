import { LightningElement, track } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fontawasome from '@salesforce/resourceUrl/fontawasome';
import { shuffleArray } from './utils';

export default class GameBoard extends LightningElement {

    isLibLoaded = false;
    move = 0;
    seconds = 10;

    @track cards = [
        { id: 1, listClass: "card", type: "diamond", icon: "fa fa-diamond hide" },
        { id: 2, listClass: "card", type: "university", icon: "fa fa-university hide" },
        { id: 3, listClass: "card", type: "bell", icon: "fa fa-bell-o hide" },
        { id: 4, listClass: "card", type: "bolt", icon: "fa fa-bolt hide" },
        { id: 5, listClass: "card", type: "envelope", icon: "fa fa-envelope hide" },
        { id: 6, listClass: "card", type: "motorcycle", icon: "fa fa-motorcycle hide" },
        { id: 7, listClass: "card", type: "tachometer", icon: "fa fa-tachometer hide" },
        { id: 8, listClass: "card", type: "thumbs-up", icon: "fa fa-thumbs-o-up hide" },
        { id: 9, listClass: "card", type: "diamond", icon: "fa fa-diamond hide" },
        { id: 10, listClass: "card", type: "university", icon: "fa fa-university hide" },
        { id: 11, listClass: "card", type: "bell", icon: "fa fa-bell-o hide" },
        { id: 12, listClass: "card", type: "bolt", icon: "fa fa-bolt hide" },
        { id: 13, listClass: "card", type: "envelope", icon: "fa fa-envelope hide" },
        { id: 14, listClass: "card", type: "motorcycle", icon: "fa fa-motorcycle hide" },
        { id: 15, listClass: "card", type: "tachometer", icon: "fa fa-tachometer hide" },
        { id: 16, listClass: "card", type: "thumbs-up", icon: "fa fa-thumbs-o-up hide" }
    ];

    renderedCallback() {
        if (this.isLibLoaded)
            return;

        Promise.all([
            loadStyle(this, fontawasome + '/fontawesome/css/font-awesome.min.css')
        ])
            .then(() => {
                this.cards = [...shuffleArray(this.cards)];
                this.isLibLoaded = true;
            })
            .catch(error => console.error(`Error in loading libraries\n${error}`));
    }

    showTileHandler(event) {
        const details = event.detail;


        for (let card of this.cards) {
            if (card.id === details.id) {
                let icon = card.icon;

                if (icon.includes('hide')) {
                    icon = icon.slice(0, icon.indexOf('hide') - 1);
                    card.icon = icon;
                }
                console.log(icon)
                break;
            }
        }
    }
}