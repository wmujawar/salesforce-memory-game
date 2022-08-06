import { LightningElement, api } from 'lwc';

export default class GameTile extends LightningElement {
    @api identifier;
    @api listClass;
    @api type;
    @api icon;

    showTile(event) {        
        const id = event.target.value;
        const type = event.target.type;

        const showEvent = new CustomEvent('show', {
            detail: {
                id, type
            }
        });
        this.dispatchEvent(showEvent);
    }
}
