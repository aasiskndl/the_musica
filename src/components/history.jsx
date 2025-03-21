import "./style/history.css"
import { GoHistory } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import defaultPlaylistImage from "../assets/defaultPlaylistImage.png"
function HCard(defaultPlaylist) {
    return <tr>
        <td>1</td>
        <td>
            <div className="table-title">
                <div className="left" style={{ backgroundImage: defaultPlaylist }}></div>
                <div className="right">TITLE</div>
            </div>
        </td>
        <td>FCK</td>
        <td><MdFavoriteBorder /></td>
        <td>-2:36</td>
    </tr>
}

function History() {
    const defaultPlaylist = `Url(${defaultPlaylistImage})`
    return <div className="history">
        <div className="title">
            <span>
                <GoHistory />
                Recently Played<span style={{ color: "orangered" }}>.</span>
            </span>
        </div>
        <br />
        {/* ACTUAL CONTENT */}
        <div className="h-content">
            <table className="h-table">
                <tr id="heading">
                    <td>#</td>
                    <td>Title</td>
                    <td>Album</td>
                    <td>Favourite</td>
                    <td>Duration</td>
                </tr>

                {HCard(defaultPlaylist)}
                {HCard(defaultPlaylist)}
            </table>
        </div>
    </div>
}

export default History