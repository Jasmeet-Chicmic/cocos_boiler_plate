import { AudioClip, AudioSource, Vec3 } from "cc";
// import { ResourcesManager } from "./ResourcesManager";
import { ResourcesManager } from "../Managers/ResourcesManager";
import { ASSET_CACHE_MODE } from "../PopupComponent/Constant/Popup";

export class SoundManager {
    private static _instance: SoundManager = null!;
    private _audioSource: AudioSource = null!;
    private _SoundEffectAudioSource: AudioSource = null!;
    private volume: number = 1!;

    private canPlayMusic = true;
    private canPlaySound = true;

    public static getInstance() {
        if (!SoundManager._instance) {
            SoundManager._instance = new SoundManager();
        }
        return SoundManager._instance;
    }

    /**
     * 
     * @param audioSource Audio source component which will be used to play audio
     * @description This function is used to init the AudioSource component for Music, basically store the reference of audio component
     */
    initMusicAudioSource(audioSource: AudioSource) {
        this._audioSource = audioSource;
    }

/**
     * 
     * @param audioSource Sound source component which will be used to play sound clips
     * @description This function is used to init the AudioSource component for sound effects, basically store the reference of audio component
*/
    initSoundEffectAudioSource(audioSource: AudioSource) {
        this._SoundEffectAudioSource = audioSource;
    }

    /**
     * 
     * @param clipName Path of the clip, you wan to play 
     * @description sound effect plays for one time only
     * @returns {Promise}
     */
    playOneShotSoundEffect(clipName: string) {
        return new Promise(async (res) => {
            const clip: AudioClip = await ResourcesManager.loadResource(
                clipName,
                ASSET_CACHE_MODE.Frequent
            );
            if (!this.canPlaySound) {
                return;
            }
            if (clip) {
                this._audioSource.playOneShot(clip, 1);
            } else {
                // console.log(clip, "Invalid audio clip format");
            }
        });
    }

    /**
     * 
     * @param clipName Path of the clip, you wan to play 
     * @param loop true if we want to play audioclip on loop
     * @returns {Promise}
     */
    playSoundEffect(clipName: string, loop: boolean = false) {
        return new Promise(async (res) => {
            const clip: AudioClip = await ResourcesManager.loadResource(
                clipName,
                ASSET_CACHE_MODE.Normal
            );
            if (!this.canPlaySound) {
                return;
            }
            if (clip) {
                this.stopSoundEffect();
                this._SoundEffectAudioSource.clip = clip;
                this._SoundEffectAudioSource.loop = loop;
                this._SoundEffectAudioSource.play();
            } else {
                console.log(clip, "Invalid audio clip format");
            }
        });
    }

    /**
     * @description used to stop sound effect
     */
    stopSoundEffect() {
        this._SoundEffectAudioSource.stop();
    }
 
    /**
     * 
     * @param loop true if we want to play audioclip on loop
     * @description Used to play the default clip which is set from creator inside audiosource component 
     */
    playMusic(loop: boolean):void {
        if (!this.canPlayMusic) {
            return;
        }
        this._audioSource.loop = loop;
        if (!this._audioSource.playing) {
            this._audioSource.play();
        }
    }
/**
     * 
     * @param clipName Path of the clip, you wan to play 
     * @param loop true if we want to play audioclip on loop
     * @returns {Promise}
     */
    playMusicClip(clipName: string, loop: boolean) {
        return new Promise(async (res) => {
            const clip: AudioClip = await ResourcesManager.loadResource(
                clipName,
                ASSET_CACHE_MODE.Normal
            );
            if (!this.canPlayMusic) {
                return;
            }
            if (clip) {
                this.stopMusic();
                this._audioSource.clip = clip;
                this._audioSource.loop = loop;
                this._audioSource.play();
            } else {
                console.log(clip, "Invalid audio clip format");
            }
        });
    }
    /**
     * @description used to stop music
     */
    stopMusic() {
        this._audioSource.stop();
    }

    /**
     * 
     * @param flag volume value
     * @description Used to set the volume of music audio source
     */
    setMusicVolume(flag: number) {
        flag = Math.round(flag * 10) / 10;
        this._audioSource.volume = flag;
        localStorage.setItem("MusicVolume", flag.toString());
    }
 /**
     * 
     * @param flag volume value
     * @description Used to set the volume of Sound audio source
     */
    setEffectsVolume(flag: number) {
        flag = Math.round(flag * 10) / 10;
        this._SoundEffectAudioSource.volume = flag;
        localStorage.setItem("EffectVolume", flag.toString());
    }

    /**
     * @description used to get the current Music volume
     */
    get MusicVolume() {
        return this._audioSource.volume;
    }
 /**
     * @description used to get the current sound effect volume
     */
    get EffectsVolume() {
        return this._SoundEffectAudioSource.volume;
    }


    /**
     * @description It is a flag or state which can be used to check whether we can play music."
     */
    set CanPlayMusic(value: boolean) {
        if (value) {
            this._audioSource.play();
            // console.log("can play music");
        } else {
            this._audioSource.pause();
            // console.log("audio stop");
        }
        localStorage.setItem("CanPlayMusic", value.toString());
        this.canPlayMusic = value;
    }

    get CanPlayMusic(): boolean {
        return this.canPlayMusic;
    }
 /**
     * @description It is a flag or state which can be used to check whether we can play sound."
     */
    set CanPlaySound(value: boolean) {
        if (value) {
            // console.log("Starting sound");
            this._SoundEffectAudioSource.play();
        } else {
            this._SoundEffectAudioSource.stop();
        }
        localStorage.setItem("CanPlayEffects", value.toString());
        this.canPlaySound = value;
    }

    get CanPlaySound(): boolean {
        return this.canPlaySound;
    }

    /**
     * @description Used to set the stored volume from local storage
     */
    setVolumePrefFromLocal() {
        let MusicVolume: string | null = localStorage.getItem("MusicVolume");
        let EffectVolume: string | null = localStorage.getItem("EffectVolume");
        let CanPlayMusic: string | null = localStorage.getItem("CanPlayMusic");
        let CanPlayEffects: string | null =
            localStorage.getItem("CanPlayEffects");

        if (MusicVolume) {
            this.setMusicVolume(parseFloat(MusicVolume));
            // console.log("MusicVolume: ", parseFloat(MusicVolume));
        }
        if (EffectVolume) {
            this.setEffectsVolume(parseFloat(EffectVolume));
            // console.log("EffectVolume: ", parseFloat(EffectVolume));
        }
        if (CanPlayMusic) {
            this.CanPlayMusic = CanPlayMusic === "true";
            // console.log("CanPlayMusic: ", this.CanPlayMusic);
        }
        if (CanPlayEffects) {
            this.CanPlaySound = CanPlayEffects === "true";
            // console.log("CanPlayEffects: ", this.CanPlaySound);
        }
    }
}
