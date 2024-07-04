# Managing Popups in Cocos Creator

This guide explains how to manage popups within your Cocos Creator project using prefabs and a popup manager class.

## 1. Create a Popup Prefab and Place it Inside the Resource Folder

1. Create your popup UI using Cocos Creator's prefab system.
2. Save the popup prefab in your project's `resources` folder.

## 2. Extend Prefab Script with PopupBase Class and Pass Required Properties

1. Create a TypeScript script to extend the `PopupBase` class (if applicable).

## 3. Add its Path and Parameters inside constants/popups.ts File

1. Define each popup in constants/popups.ts, specifying its path and parameters.

## 4. Open Popup by Calling show Function of Popup Manager Class

1. Call the show function of PopupManager class, passing the type of popup and optional parameters.

