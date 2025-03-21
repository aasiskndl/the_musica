import "./style/mainheader.css"
import { IoIosSearch } from "react-icons/io";
import { PiMusicNoteSimpleFill } from "react-icons/pi";

function MainHeader() {
    return <div className="m-header">
        <div className="left">
            <span> <PiMusicNoteSimpleFill />theMusica<span id="dot">.</span></span>
        </div>
        <div className="right">
            <div className="search">
                <IoIosSearch />
                <input type="text" name="search" id="search" placeholder="Search for music..." />

            </div>
        </div>
    </div>
}

export default MainHeader