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

