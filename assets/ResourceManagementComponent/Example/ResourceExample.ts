import { _decorator, Button, Component, Node, Prefab } from 'cc';
import { ResourcesManager } from '../../Managers/ResourcesManager';
import { ASSET_CACHE_MODE } from '../../PopupComponent/Constant/Popup';
const { ccclass, property } = _decorator;

@ccclass('ResourceExample')
export class ResourceExample extends Component {

    /**
     * @description user to load one resource
     */
    async loadOneResource() {
        try {
            console.log("Loading Started...");
            const loaded = await ResourcesManager.loadResource("./Prefabs/settingsPopup", ASSET_CACHE_MODE.Normal);
            console.log("Loaded ==>", loaded);
        } catch (error) {
            console.log("Error ==>", error);

        }
    }
    /**
     * @description user to load directory
     */
    async loadDirectory() {
        try {
            console.log("Loading Started...");
            const loaded = await ResourcesManager.loadDirectory("./Prefabs", Prefab);
            console.log("Loaded ==>", loaded);
        } catch (error) {
            console.log("Error ==>", error);

        }
    }
    /**
     * @description The function used to load multiple resources returns an object of the loaded resources.
     */
    async loadMultipleResources() {
        try {
            console.log("Loading Started...");
            const loaded = await ResourcesManager.loadArrayOfResource([{ "SettingsPopup": "./Prefabs/settingsPopup" }], ASSET_CACHE_MODE.Normal);
            console.log("Loaded ==>", loaded);
        } catch (error) {
            console.log("Error ==>", error);

        }
    }
}

