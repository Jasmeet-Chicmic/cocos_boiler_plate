# Managing Popups in Cocos Creator

This guide explains how to manage popups within your Cocos Creator project using prefabs and a popup manager class.

## 1. Create a Popup Prefab and Place it Inside the Resource Folder

1. Create your popup UI using Cocos Creator's prefab system.
2. Save the popup prefab in your project's `resources` folder because popup class loads it dynamically.

## 2. Extend Prefab Script with PopupBase Class and Pass Required Properties

1. Create a TypeScript script to extend the `PopupBase` class (if applicable).
2. Overlay Property: Pass your overlay node here, which can be used to block events.
3. Main Property: In this property, pass the parent node of the popup, which contains all popup content. This node is animated by the `PopupBase` class.
4. Overlay and the main node should be siblings. The overlay shows directly on the screen without animation, while the popup animation is only played on the main popup node.

## 3. Add its Path and Parameters inside `constants/popups.ts` File

1. Define each popup in `constants/popups.ts`, specifying its path and parameters.

## 4. Open Popup by Calling the `show` Function of the Popup Manager Class

1. Call the `show` function of the `PopupManager` class, passing the type of popup and optional parameters.

## Additional Functions Description

### `init(options: any)`

- **Parameters**: `options` - An object that contains information which can be used inside the popup.
- **Description**: This function can be overridden from the `PopupBase` class. Initializes the popup properties or data.

### `onBeforeShow(): Promise<void>`

- **Description**: This function can be overridden from the `PopupBase` class. It can be used to do some work before showing the popup. After the work is done, the popup will display on the screen asynchronously.
- **Returns**: A promise that resolves when the work is done.

### `onBeforeHide(suspended: boolean): Promise<void>`

- **Parameters**: `suspended` - Specifies if the popup is suspended or not.
- **Description**: This function can be overridden from the `PopupBase` class. It is used to do some work before hiding the popup.
- **Returns**: A promise that resolves when the work is done.

### `onAfterShow()`

- **Description**: This function can be overridden from the `PopupBase` class. It is used to do some work after showing the popup.

### `onAfterHide(suspended: boolean)`

- **Parameters**: `suspended` - Specifies if the popup is suspended or not.
- **Description**: This function can be overridden from the `PopupBase` class. It is used to do some work after hiding the popup.
