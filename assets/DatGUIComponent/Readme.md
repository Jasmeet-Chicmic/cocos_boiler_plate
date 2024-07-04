Here's a README to help you understand and use the provided `DatGuiController` for your project.

# DatGuiController

`DatGuiController` is a utility class for integrating dat.GUI into a Cocos Creator project. It allows you to create a user interface for debugging and manipulating properties of your game objects in real time.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Example](#example)

## Installation

1. Ensure you have Cocos Creator installed.
2. Download or include `dat.gui.min.js` in your project.
3. Copy the `DatGuiController.ts` file into your Cocos Creator project.

## Usage

### Setting up DatGuiController

1. Import the necessary modules and the `DatGuiController` class in your script.

```typescript
import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import dat from './dat.gui.min.js';
import { DatGuiController, DatUiCategory, DebugComponent } from './DatGuiController';
```

2. Create a script for your component and set up the controllers.

```typescript
const { ccclass } = _decorator;

@ccclass('datGuiTest')
export class datGuiTest extends Component {

    maximumValue = { count: 0 };
    
    start() {
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
          
        const controller3: DebugComponent = {
            name: "count",
            component: this.maximumValue,
            defaultValues: [0, 1, 2, 4, 6],
            changeHandle: (arg) => {
                this.maximumValue.count = arg;
                console.log(this.maximumValue.count);
            }
        };
          
        DatGuiController.Instance.add({
            category: DatUiCategory.CONSTANT,
            name: this.node,
            triggers: [controller3],
        });
    }
}
```

## Configuration

### DatGuiController

`DatGuiController` is a singleton class. You can access it using `DatGuiController.Instance`.

### DatGuiComponent

A `DatGuiComponent` represents a category and the triggers associated with a specific node or component. It has the following structure:

```typescript
export interface DatGuiComponent {
  category: DatUiCategory;
  name: string | Node;
  triggers?: DebugComponent[];
}
```

### DebugComponent

A `DebugComponent` represents the component or property you want to manipulate. It has the following structure:

```typescript
export type DebugComponent = {
  component: Component | Vec3 | Vec2 | number | string | object;
  name: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValues?: any[];
  changeHandle: (change: any) => void;
};
```

### DefaultGUIParams

Default parameters for the dat.GUI instance:

```typescript
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
```

## Example

```typescript
const { ccclass } = _decorator;

@ccclass('datGuiTest')
export class datGuiTest extends Component {

    maximumValue = { count: 0 };
    
    start() {
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
          
        const controller3: DebugComponent = {
            name: "count",
            component: this.maximumValue,
            defaultValues: [0, 1, 2, 4, 6],
            changeHandle: (arg) => {
                this.maximumValue.count = arg;
                console.log(this.maximumValue.count);
            }
        };
          
        DatGuiController.Instance.add({
            category: DatUiCategory.CONSTANT,
            name: this.node,
            triggers: [controller3],
        });
    }
}
```

This example sets up three controllers: one for manipulating the x-scale of a node, one for the y-scale, and one for a custom `count` property.


This README provides a detailed guide on how to integrate and use the `DatGuiController` class in your Cocos Creator project for debugging and manipulating game objects in real time.