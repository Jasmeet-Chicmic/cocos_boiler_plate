import { _decorator, Component, Node } from 'cc';
import { CircularLoader, LoaderType } from '../CircularLoader';
const { ccclass, property } = _decorator;

@ccclass('LoaderExample')
export class LoaderExample extends Component {
    @property({ type: Node })
    circularLoader: Node = null;


    
    startLoader() {
        this.circularLoader.getComponent(CircularLoader).showLoader(LoaderType.LOADER_WITH_MESSAGE, "Loading..")
    }
    stopLoader() {
        this.circularLoader.getComponent(CircularLoader).stopLoader()
    }
}

