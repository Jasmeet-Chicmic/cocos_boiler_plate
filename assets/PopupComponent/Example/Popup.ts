import { _decorator, Label, Node } from "cc";
import PopupBase from "../PopupBase";
import { PopupManager } from "../PopupManager";
import { POPUPS } from "../Constant/Popup";

const { ccclass, property } = _decorator;

@ccclass("Popup")
export class Popup extends PopupBase {
    @property(Node)
    protected closeBtn: Node | null = null;

    @property(Label)
    protected curFlagLabel: Label | null = null;

    @property(Label)
    protected newFlagLabel: Label | null = null;

    @property(Node)
    protected normalBtn: Node | null = null;

    @property(Node)
    protected priorityBtn: Node | null = null;

    @property(Node)
    protected immediatelyBtn: Node | null = null;

    protected newFlag: string | null = null;

    /** Pop -up path */
    public static get path() {
        return "prefabs/settingsPopup";
    }
    protected onEnable(): void {
        console.log("options", this.options);
    }
    protected onLoad() {
        this.registerEvent();
    }

    protected onDestroy() {
        this.unregisterEvent();
    }

    /**
     * @description used to register some events
     */
    protected registerEvent() { }
    /**
        * @description used to unregister the events
        */
    protected unregisterEvent() { }
    updateData() {
        console.log("Hello world");
    }
    /**
       * @param options An object that contains information which can be used inside the popup.
       * @description This function is overridden from the PopupBase class. Updates the UI based on initial values or manipulates the initial state.
       */
    protected updateDisplay(options: string) {
        console.log("Update display", options);
        this.curFlagLabel && (this.curFlagLabel.string = options);
        this.updateFlag();
    }


    /** @description used to update the flag inside popup */
    protected updateFlag() {
        // this.newFlag = (Math.random() * 10000).toFixed(0).padStart(5, "0");
        this.newFlagLabel && (this.newFlagLabel.string = this.newFlag || "");
    }

    /**
     * @description used to hide the popup 
     */
    protected onCloseBtnClick() {
        this.hide();
    }



    /**
     * @param options An object that contains information which can be used inside the popup.
     * @description This function is overridden from the PopupBase class. Initializes the popup properties or data.
     */
    protected init(options: any): void {
        console.log("Inside init", options);
    }



    /**
 * @description This function is overridden from the PopupBase class. It can be used to do some work before showing the popup.
 * After the work is done, the popup will display on the screen asynchronously.
 * @returns {Promise} It returns a promise based on the work done.
 */

    protected onBeforeShow(): Promise<void> {
        let error: boolean = false;
        return new Promise((res, rej) => {
            if (!error) {
                console.log("Doing some work before popup show....")
                res();
            } else {
                console.log("Some error Ocuured");
                rej()

            }
        })

    }


    /**
     * 
     * @param suspended specify if the popup is suspended or not
     * @description This function is overridden from the PopupBase class.It is used to do some work before hiding the popup
     * @returns  {Promise} It returns a promise based on the work done.
     */
    protected onBeforeHide(suspended: boolean): Promise<void> {
        let error: boolean = false;
        return new Promise((res, rej) => {
            if (!error) {
                console.log("Doing some work before popup Hide....")
                res();
            } else {
                console.log("Some error Ocuured");
                rej()

            }
        })
    }


    /**
     * @description This function is overridden from the PopupBase class.It is used to do some work after showing the popup
     */
    protected onAfterShow(): void {
        console.log("Do something before showing the popup");

    }


    /**
     * 
     * @param suspended specify if the popup is suspended or not
     * @description his function is overridden from the PopupBase class. It is use to do some work  after hiding the popup
     */
    protected onAfterHide(suspended: boolean): void {
        console.log("Do Something after hiding the popup")
    }




    /**
     * @description Used to show popup according to their property
     */
    protected onPriorityBtnClick() {
        this.newFlag = "Priority high ";
        PopupManager.show(POPUPS.SETTINGS, {
            name: "Test",
            Label: this.newFlag,
            priority: 1
        });
        this.updateFlag();
    }
    /**
        * @description to show the popup in normal circumstances
        */
    protected onNormalBtnClick() {
        this.hide();
        this.newFlag = "Normal Popup";
        PopupManager.show(POPUPS.SETTINGS, {
            name: "Test",
            Label: this.newFlag,
        });
        this.updateFlag();
    }
    /**
     * @description to open popup Immediately
     */
    protected onImmediatelyBtnClick() {
        this.newFlag = " Immediately open";
        PopupManager.show(POPUPS.SETTINGS, {
            name: "Test",
            Label: this.newFlag,
            immediately: true
        });
    }

}
