import { _decorator, Component, Node } from 'cc';
import { PopupManager } from '../PopupManager';
import { POPUPS } from '../Constant/Popup';
const { ccclass, property } = _decorator;

@ccclass('PopupButton')
export class PopupButton extends Component {
    start() {

    }
    openPopup() {
        PopupManager.show(POPUPS.SETTINGS, {})
    }
    update(deltaTime: number) {

    }
}

