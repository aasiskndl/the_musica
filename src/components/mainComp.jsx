import History from "./history"
import MainHeader from "./mainHeader"
import Player from "./player"
import Playlist from "./playlist"
import "./style/main.css"
function MainComp() {
    return <div className="main-comp">
        <MainHeader />
        <Playlist />
        <History />
        <Player />
    </div>
}

export default MainComp