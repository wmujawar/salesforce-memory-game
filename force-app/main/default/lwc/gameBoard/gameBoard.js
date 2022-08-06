import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fontawasome from '@salesforce/resourceUrl/fontawasome';

export default class GameBoard extends LightningElement {

    isLibLoaded = false;
    move = 0;
    seconds = 10;

    cards = [
        { id: 1, listClass: "card", type: "diamond", icon: "fa fa-diamond" },
        { id: 2, listClass: "card", type: "university", icon: "fa fa-university" },
        { id: 3, listClass: "card", type: "bell", icon: "fa fa-bell-o" },
        { id: 4, listClass: "card", type: "bolt", icon: "fa fa-bolt" },
        { id: 5, listClass: "card", type: "envelope", icon: "fa fa-envelope" },
        { id: 6, listClass: "card", type: "motorcycle", icon: "fa fa-motorcycle" },
        { id: 7, listClass: "card", type: "tachometer", icon: "fa fa-tachometer" },
        { id: 8, listClass: "card", type: "thumbs-up", icon: "fa fa-thumbs-o-up" },
        { id: 9, listClass: "card", type: "diamond", icon: "fa fa-diamond" },
        { id: 10, listClass: "card", type: "university", icon: "fa fa-university" },
        { id: 11, listClass: "card", type: "bell", icon: "fa fa-bell-o" },
        { id: 12, listClass: "card", type: "bolt", icon: "fa fa-bolt" },
        { id: 13, listClass: "card", type: "envelope", icon: "fa fa-envelope" },
        { id: 14, listClass: "card", type: "motorcycle", icon: "fa fa-motorcycle" },
        { id: 15, listClass: "card", type: "tachometer", icon: "fa fa-tachometer" },
        { id: 16, listClass: "card", type: "thumbs-up", icon: "fa fa-thumbs-o-up" }
    ];

    renderedCallback() {
        if (this.isLibLoaded)
            return;

        loadStyle(this, fontawasome + '/fontawesome/css/font-awesome.min.css')
            .then(() => {
                this.isLibLoaded = true;
            })
            .catch(error => console.error(`Error in loading libraries\n${error}`));
    }
}