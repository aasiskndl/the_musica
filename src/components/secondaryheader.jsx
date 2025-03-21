import "./style/Secondaryheader.css"
import { PiPlaylist, PiQueue } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";

function SecondaryHeader() {

    return <div className="s-header">
        <div className="left active">
            <span><PiQueue />
                Queue</span>
        </div>
        <div className="mid">
            <span><MdFavoriteBorder />
                Favoutites</span>
        </div>
        <div className="right">
            <span><PiPlaylist />
                Playlist</span>
        </div>
    </div>
}

export default SecondaryHeader