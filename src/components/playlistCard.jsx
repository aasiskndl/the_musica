import "./style/playlist.css"
import { PiTrash } from "react-icons/pi";
import defaultPlaylistImage from "../assets/defaultPlaylistImage.png"
function PlaylistCard() {
    const defaultPlaylist = `Url(${defaultPlaylistImage})`
    return <div className="play-card">
        <div className="img" style={{ backgroundImage: defaultPlaylist }}></div>
        <div className="title">
            Rock & Roll
        </div>
        <div className="del">
            <PiTrash />
        </div>
    </div>
}

export default PlaylistCard