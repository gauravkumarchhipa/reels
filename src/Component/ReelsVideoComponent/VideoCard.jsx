import React, { useRef, useState } from "react";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";
import "./videoCard.css";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <>
      <div className="videoCard">
        <VideoHeader />
        <video
          className="videoCard_player"
          ref={videoRef}
          onClick={onVideoPress}
          src={url}
          alt="IG reel video"
          loop
        />
        <VideoFooter />
        
      </div>
    </>
  );
}

export default VideoCard;
