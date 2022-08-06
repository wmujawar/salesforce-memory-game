import { LightningElement, api } from 'lwc';

export default class GameTile extends LightningElement {
    @api listClass;
    @api type;
    @api icon;

}