import { _decorator, Component, Vec3 } from 'cc';
import { DatGuiController, DatUiCategory, DebugComponent } from '../DatGuiController';

const { ccclass } = _decorator;

@ccclass('datGuiTest')
export class datGuiTest extends Component {

  maximumValue = { count: 0 };

  start() {


    this.addFolder();




  }

  /**
   * @description used to add folder inside DAT Gui, and by using DebugComponent we can add different properties
   */
  addFolder() {
    const controller1: DebugComponent = {
      name: "x",
      component: this.node.getScale(),
      step: 1,
      max: 10,
      changeHandle: (arg) => {
        this.node.setScale(new Vec3(arg, this.node.scale.y, this.node.scale.z));
      }
    };

    const controller2: DebugComponent = {
      name: "y",
      component: this.node.getScale(),
      defaultValues: [0, 1, 2, 4, 6],
      changeHandle: (arg) => {
        this.node.setScale(new Vec3(this.node.scale.x, arg, this.node.scale.z));
      }
    };

    DatGuiController.Instance.add({
      category: DatUiCategory.NODE,
      name: this.node,
      triggers: [controller1, controller2],
    });
  }
}

