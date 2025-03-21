import "./style/playlist.css"
import { PiPlaylist } from "react-icons/pi";
import { IoCreateOutline } from "react-icons/io5";
import PlaylistCard from "./playlistCard";

function Playlist() {
    return <div className="playlist">
        {/* HEADER */}
        <div className="header">
            <div className="title">
                <span>
                    <PiPlaylist />
                    Playlist<span style={{color:"orangered"}}>.</span>
                </span>
            </div>
            <div className="create">
                <IoCreateOutline />

            </div>
        </div>
        {/* GAP */}
        <br />
        {/* ACTUAL CONTENT */}
        <div className="playlist-content">
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
        </div>
    </div>
}


export default Playlist