import "./VideoPlayer.css";
import collage_video from "../../assets/collage-video.mp4";
import { useRef } from "react";

export default function VideoPlayer({ playState, setPlayState }) {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      ref={player}
      className={`video-player ${playState ? "" : "hide"}`}
      onClick={closePlayer}
    >
      <video src={collage_video} autoPlay muted controls></video>
    </div>
  );
}
