
import "./style/player.css"
import defaultPlaylistImage from "../assets/defaultPlaylistImage.png"

// ICONS
import { IoPlaySkipBackSharp, IoPlaySkipForward, IoPause, IoPlay } from "react-icons/io5";
import { TfiLoop } from "react-icons/tfi";
import { CiVolume, CiVolumeHigh } from "react-icons/ci";
import { SlShuffle } from "react-icons/sl";

import { useState } from "react";

function Player() {
    const defaultPlaylist = `Url(${defaultPlaylistImage})`
    const [playing, SetPlaying] = useState(false)
    return <div className="player">
        <div className="audio">
            <div className="image" style={{ backgroundImage: defaultPlaylist }}>

            </div>
            <div className="title">TITLE</div>
        </div>
        <div className="control">
            <div className="slider">
        <input type="range" name="" id="" min={0} max={100} />
            </div>
            <div className="ctrl">
                <IoPlaySkipBackSharp />
                <div className="play-pause" onClick={() => { SetPlaying(!playing) }}>
                    {playing ? <IoPause  size={"25px"}/> : <IoPlay size={"25px"}/>}
                </div>
                <IoPlaySkipForward />
            </div>

        </div>
        <div className="misc">
            <TfiLoop />
            <div className="volume">
                <CiVolume />

                <input type="range" name="volume" id="volume" />

                <CiVolumeHigh />
            </div>
            <SlShuffle />

        </div>
    </div>
}

export default Player