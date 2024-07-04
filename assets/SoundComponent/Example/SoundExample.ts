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

