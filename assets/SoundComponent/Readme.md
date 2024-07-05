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

Initialize the Sound Manager and associate it with the AudioSource components

## 4. We can play different sounds or music using the provided functions as mentioned:

```typescript
import { _decorator, AudioSource, Component, Node, ProgressBar, Slider } from 'cc';
import { SoundManager } from '../SoundManager';
const { ccclass, property } = _decorator;

@ccclass('SoundExample')
export class SoundExample extends Component {
    @property({ type: AudioSource })
    soundComponent: AudioSource = null;
    @property({ type: AudioSource })
    musicComponent: AudioSource = null;


    protected onLoad(): void {
        SoundManager.getInstance().initMusicAudioSource(this.musicComponent)
        SoundManager.getInstance().initSoundEffectAudioSource(this.soundComponent)

    }

    /**
     * 
     * @param e Event from slider events
     * @description used to adjust the volume of sound
     */
    adjustSoundVolume(e) {
        // console.log("slide Sound", e.progress);
        SoundManager.getInstance().setEffectsVolume(e.progress)

    }
    /**
   * 
   * @param e Event from slider events
   * @description used to adjust the volume of music
   */
    adjustMusicVolume(e) {
        // console.log("slide Music", e.progress);
        SoundManager.getInstance().setMusicVolume(e.progress)
    }

    /**
  * 
  * 
  * @description used to play sound effects
  */
    playSound() {
        SoundManager.getInstance().playSoundEffect('./Sounds/Score', false)
    }

    /**
      * 
      * 
      * @description used to play music
      */
    playMusic() {
        SoundManager.getInstance().playMusicClip('./Sounds/GemsCollect', true)

    }


}


