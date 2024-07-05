# CircularLoader and LoaderExample

## Introduction

This project contains two primary classes for managing and demonstrating the use of a circular loader with optional messages in Cocos Creator.

## How to Use Circular Loader Prefab

**First way**: You can drag and drop the prefab to your component and use it by passing it as a property.

**Second way**: You can instantiate the circular node and use it wherever you want.

## CircularLoader Class

### Properties

- `messages: Node` - Node for displaying messages.
- `circle: Node` - Node for displaying the loader animation.

### Methods

#### `showLoader(type: LoaderType = LoaderType.LOADER_WITH_MESSAGE, msgString: string = "")`

Displays the loader based on the specified type.

- `type`: The type of loader to show (`LOADER_WITH_MESSAGE`, `ONLY_LOADER`, `ONLY_MESSAGE`).
- `msgString`: The message to display (if applicable).

#### `stopLoader()`

Stops the loader and hides the message.

### Enum

#### `LoaderType`

- `LOADER_WITH_MESSAGE`
- `ONLY_LOADER`
- `ONLY_MESSAGE`

### Code

```typescript
import {
    _decorator,
    Component,
    Node,
    Label,
    Animation
} from "cc";
const { ccclass, property } = _decorator;

export enum LoaderType {
    LOADER_WITH_MESSAGE = "LOADER_WITH_MESSAGE",
    ONLY_LOADER = "ONLY_LOADER",
    ONLY_MESSAGE = "ONLY_MESSAGE",
}

/**
 * @title CircularLoader class
 * @notice Manages the circular loader pop-ups.
 */
@ccclass("CircularLoader")
export class CircularLoader extends Component {
    @property(Node) messages: Node = null!;
    @property(Node) circle: Node = null!;

    showLoader(type: LoaderType = LoaderType.LOADER_WITH_MESSAGE, msgString: string = "") {
        switch (type) {
            case LoaderType.LOADER_WITH_MESSAGE:
                this.circle.active = true;
                this.messages.active = true;
                this.messages.getComponent(Label).string = msgString;
                break;
            case LoaderType.ONLY_MESSAGE:
                this.circle.active = false;
                this.messages.active = true;
                this.messages.getComponent(Label).string = msgString;
                break;
            case LoaderType.ONLY_LOADER:
                this.circle.active = true;
                this.messages.active = false;
                break;
        }
        this.node.active = true;
    }

    onEnable() {
        this.circle?.getComponent(Animation)?.play();
    }

    stopLoader() {
        this.node.active = false;
        this.messages.getComponent(Label).string = '';
        this.circle.getComponent(Animation)?.stop();
    }
}
