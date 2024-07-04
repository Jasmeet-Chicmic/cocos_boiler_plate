# Resource Manager

This guide explains how to manage resources within your Cocos Creator project using the `ResourcesManager` class. It covers loading single resources, directories, and multiple resources, as well as caching and recycling them.

## Features

- Load single resource
- Load directory
- Load multiple resources
- Manage resource cache
- Recycle resources

## Installation

Make sure you have Cocos Creator installed and set up in your project. Then, include the `ResourcesManager.ts` file in your project directory.

## Usage

### Load a Single Resource

To load a single resource, use the `loadResource` method. This method loads the resource and stores it in the cache if specified.

#### Example

```typescript
import { ResourcesManager } from './path/to/ResourcesManager';
import { ASSET_CACHE_MODE } from './path/to/Constants';

async function loadOneResource() {
    try {
        console.log("Loading Started...");
        const loaded = await ResourcesManager.loadResource("./Prefabs/settingsPopup", ASSET_CACHE_MODE.Normal);
        console.log("Loaded:", loaded);
    } catch (error) {
        console.error("Error:", error);
    }
}
```typescript
### Load Multiple Resources

To load multiple resources simultaneously, use the `loadArrayOfResource` method.

#### Example

```typescript
import { ResourcesManager } from './path/to/ResourcesManager';
import { ASSET_CACHE_MODE } from './path/to/Constants';

async function loadMultipleResources() {
    try {
        console.log("Loading Started...");
        const resourcesToLoad = [
            { "SettingsPopup": "./Prefabs/settingsPopup" },
            { "OtherPrefab": "./Prefabs/otherPrefab" }
        ];
        const loaded = await ResourcesManager.loadArrayOfResource(resourcesToLoad, ASSET_CACHE_MODE.Normal);
        console.log("Loaded:", loaded);
    } catch (error) {
        console.error("Error:", error);
    }
}
```typescript
### Load Directory

To load all assets from a directory, use the loadDirectory method.
#### Example

```typescript
import { ResourcesManager } from './path/to/ResourcesManager';
import { Prefab } from 'cc';

async function loadDirectory() {
    try {
        console.log("Loading Started...");
        const loaded = await ResourcesManager.loadDirectory("./Prefabs", Prefab);
        console.log("Loaded:", loaded);
    } catch (error) {
        console.error("Error:", error);
    }
}

```typescript

