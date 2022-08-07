import { LightningElement, track } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fontawasome from '@salesforce/resourceUrl/fontawasome';
import { shuffleArray, removeClass, delay } from './utils';

export default class GameBoard extends LightningElement {

    isLibLoaded = false;
    move = 0;
    seconds = 10;
    selectedTile = [];

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

    showLostAnimation() {
        this.selectedTile[0].listClass += " loose";
        this.selectedTile[1].listClass += " loose";

        for (let card of this.cards) {
            if (card.id === this.selectedTile[0].id) {
                card.listClass = this.selectedTile[0].listClass;
            } else if (card.id == this.selectedTile[1].id) {
                card.listClass = this.selectedTile[1].listClass;
            } else {
                // disable the rest of the cards
                card.listClass += " disable";
            }
        }
    }

    async showTileHandler(event) {
        const details = event.detail;
        let isLost = false;

        for (let card of this.cards) {
            if (card.id === details.id) {

                let icon = card.icon;
                let listClass = card.listClass;

                // Unhide
                icon = removeClass(icon, 'hide');

                // Disable
                if (!listClass.includes('disable')) {
                    listClass += " disable"
                }

                listClass += " selected";

                card.icon = icon;
                card.listClass = listClass;

                this.selectedTile.push(card);

                break;
            }
        }

        // Check if matches
        if (this.selectedTile.length === 2) {
            if (this.selectedTile[0].type === this.selectedTile[1].type) {
                this.selectedTile[0].listClass += " won"
                this.selectedTile[1].listClass += " won"
                this.move++;
                isLost = false;
            } else {
                this.showLostAnimation()
                await delay(1000);

                // hide
                this.selectedTile[0].icon += " hide";
                this.selectedTile[1].icon += " hide";

                // enable
                this.selectedTile[0].listClass = removeClass(this.selectedTile[0].listClass, 'disable');
                this.selectedTile[1].listClass = removeClass(this.selectedTile[1].listClass, 'disable');

                this.selectedTile[0].listClass = removeClass(this.selectedTile[0].listClass, 'loose');
                this.selectedTile[1].listClass = removeClass(this.selectedTile[1].listClass, 'loose');
                isLost = true;
            }

            this.selectedTile[0].listClass = removeClass(this.selectedTile[0].listClass, 'selected');
            this.selectedTile[1].listClass = removeClass(this.selectedTile[1].listClass, 'selected');

            for (let card of this.cards) {
                if (card.id === this.selectedTile[0].id) {
                    card.icon = this.selectedTile[0].icon;
                    card.listClass = this.selectedTile[0].listClass;
                } else if (card.id == this.selectedTile[1].id) {
                    card.icon = this.selectedTile[1].icon;
                    card.listClass = this.selectedTile[1].listClass;
                } else {
                    // enable all the unselected grid
                    card.listClass = removeClass(card.listClass, 'disable');
                }
            }

            this.selectedTile = [];
        }
    }

    resetGame() {
        for (let card of this.cards) {
            card.listClass = "card";

            if (!card.icon.includes('hide'))
                card.icon += " hide";
        }
        this.cards = [...shuffleArray(this.cards)];
    }
}