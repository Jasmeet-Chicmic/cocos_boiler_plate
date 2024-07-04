# Sound Manager

This guide explains how to manage sounds within your Cocos Creator project using a Sound Manager class.

## 1. Set Up Music and Sound Effect Nodes

1. Create two nodes in your Cocos Creator project:
   - One node for managing music.
   - Another node for managing sound effects.
   
2. Attach an AudioSource component to each node.

## 2. Resource Manager

1. The Resource Manager is required to load the clips at runtime.

## 3. Initialize Sound Manager and Audio Sources

Initialize the Sound Manager and associate it with the AudioSource components:

```typescript
import SoundManager from './path/to/SoundManager'; // Adjust path as per your project structure

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundController extends cc.Component {
    @property(cc.Node)
    musicNode: cc.Node = null;

    @property(cc.Node)
    soundEffectNode: cc.Node = null;

    private musicComponent: cc.AudioSource = null;
    private soundComponent: cc.AudioSource = null;

    onLoad() {
        // Initialize music and sound effect audio sources
        SoundManager.getInstance().initMusicAudioSource(this.musicNode.getComponent(cc.AudioSource));
        SoundManager.getInstance().initSoundEffectAudioSource(this.soundEffectNode.getComponent(cc.AudioSource));
        
        // Optional: Adjust volume, loop, and other settings if needed
    }

    // Example functions to play sound and music
    playSound() {
        SoundManager.getInstance().playSoundEffect('./Sounds/Score', false);
    }

    playMusic() {
        SoundManager.getInstance().playMusicClip('./Sounds/GemsCollect', true);
    }

    /**
     * Adjusts the volume of sound effects.
     * @param e Event from slider.
     */
    adjustSoundVolume(e) {
        SoundManager.getInstance().setEffectsVolume(e.progress);
    }

    /**
     * Adjusts the volume of music.
     * @param e Event from slider.
     */
    adjustMusicVolume(e) {
        SoundManager.getInstance().setMusicVolume(e.progress);
    }
}
