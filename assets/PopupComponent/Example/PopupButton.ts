import { _decorator, Component, Node } from 'cc';
import { PopupManager } from '../PopupManager';
import { POPUPS } from '../Constant/Popup';
const { ccclass, property } = _decorator;

@ccclass('PopupButton')
export class PopupButton extends Component {
    start() {

    }

    /**
     * @description this function is used to open the Settings Popup.In show function we can pass data to popup as key value pair
     */
    openPopup() {
        PopupManager.show(POPUPS.SETTINGS, {})
    }



    update(deltaTime: number) {

    }
}

