import {
    _decorator,
    Component,
    Node,
    Label,
    Animation,
    Vec3,
    Widget,
} from "cc";
const { ccclass, property } = _decorator;

export enum LoaderType {
    LOADER_WITH_MESSAGE = "LOADER_WITH_MESSAGE",
    ONLY_LOADER = "ONLY_LOADER",
    ONLY_MESSAGE = "ONLY_MESSAGE",
}

@ccclass("CircularLoader")
export class CircularLoader extends Component {
    @property(Node) messages: Node = null!;
    @property(Node) circle: Node = null!;
    start() {
        console.log("hello are you");
    }

    onLoad() {
        // this.node.active = false;
    }

    /**
     * 
     * @param type Specify the type of loader you want to show
     * @param msgString Pass message for leading if LoaderType is LOADER_WITH_MESSAGE
     */
    showLoader(type: LoaderType = LoaderType.LOADER_WITH_MESSAGE, msgString: string = "") {
        switch (type) {
            case LoaderType.LOADER_WITH_MESSAGE: {
                this.circle.active = true;
                this.messages.active = true;
                this.messages.getComponent(Label).string = msgString;
                break;
            }
            case LoaderType.ONLY_MESSAGE: {
                this.circle.active = false;
                this.messages.active = true;
                this.messages.getComponent(Label).string = msgString;
                break;
            }
            case LoaderType.ONLY_LOADER: {
                this.circle.active = true;
                this.messages.active = false;
                break;
            }
        }
        // console.log("aniamtion played ");

        this.node.active = true;
        // this.message.getComponent(Label).string = msgString;
    }
    onEnable() {
        this.circle?.getComponent(Animation)?.play();
    }


    /**
     * Used to stop the loader
     */
    stopLoader() {
        this.node.active = false;
        this.messages.getComponent(Label).string = '';
        this.circle.getComponent(Animation)?.stop();
    }
}
