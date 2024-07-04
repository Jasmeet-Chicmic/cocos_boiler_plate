import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import dat from './dat.gui.min.js';

export enum DatUiCategory {
  NODE = 'Node',
  CONSTANT = 'Constant',
}

const DefaultGUIParams = {
  autoplace: true,
  closed: true,
  closeOnTop: true,
  hideable: true,
  name: 'Game Debugger',
  width: 250,
  load: JSON,  // Load state from local storage
  preset: 'Flow',
};

export type DebugComponent = {
  component: Component | Vec3 | Vec2 | number | string|object;
  name: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValues?: any[];
  changeHandle: (change: any) => void;
};

const DebugComponentDefaultValue: Partial<DebugComponent> = {
  min: 1,
  max: 10,
  step: 1,
  defaultValues: [],
};

export interface DatGuiComponent {
  category: DatUiCategory;
  name: string | Node;
  triggers?: DebugComponent[];
}

export class DatGuiController {
  private static _instance: DatGuiController | null = null;
  private _datGui: dat.GUI | null = null;
  private _enabled = true;

  public static get Instance() {
    if (!DatGuiController._instance) {
      DatGuiController._instance = new DatGuiController();
    }
    return DatGuiController._instance;
  }

  private constructor() {
    this._datGui = new dat.GUI(DefaultGUIParams);
  }

  /**
   * 
   * @param params DatGuiComponent
   * @description used to add new folders and its params which we want to change
   * @returns 
   */
  add(params: DatGuiComponent) {
    if (!this._enabled) return;
    if (!this._datGui) this._datGui = new dat.GUI(DefaultGUIParams);

    const parent = this._datGui.__folders[params.category] || this._datGui.addFolder(params.category);
    const name = params.name instanceof Node ? params.name.name : params.name;
    const node = parent.__folders[name] || parent.addFolder(name);

    params.triggers?.forEach(element => {
      const config = { ...DebugComponentDefaultValue, ...element };
      const controller = config.defaultValues.length
        ? node.add(config.component, config.name, config.defaultValues)
        : node.add(config.component, config.name).min(config.min).max(config.max).step(config.step);

      controller.onChange(args => {
        config.changeHandle(args);
      });
    });
  }
}
