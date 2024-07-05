import { _decorator, Component, Node } from 'cc';
import { CircularLoader, LoaderType } from '../CircularLoader';
const { ccclass, property } = _decorator;

@ccclass('LoaderExample')
export class LoaderExample extends Component {
    @property({ type: Node })
    circularLoader: Node = null;


    /**
     * @description used to show the loader by passing LoaderType and Message
     */
    startLoader() {
        this.circularLoader.getComponent(CircularLoader).showLoader(LoaderType.LOADER_WITH_MESSAGE, "Loading..")
    }
       /**
     * @description used to stop the loader
     */
    stopLoader() {
        this.circularLoader.getComponent(CircularLoader).stopLoader()
    }
}

