import React, { useRef, useState , useEffect} from "react";
import VideoHeader from "../ReelsVideoComponent/VideoHeader";
import VideoFooter from "../ReelsVideoComponent/VideoFooter";
import "../ReelsVideoComponent/videoCard.css";
import ReactDOM from "react-dom";


function DuplicateCard({ url, likes, shares, channel, avatarSrc, song }) {

const handleClick = (e) => {
    e.preventDefault();
    e.target.muted = !e.target.muted;
  };

  const handleScroll = (e) => {
    alert("vfdmnskgfn")
    let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
    if (next) {
      next.scrollIntoView();

      console.log("muted",e.target.muted)
      // e.target.muted = true;
    }
    
  };

  const callback = (entries) => {
    entries.forEach((entry)=>{
        let ele = entry.target.childNodes[0];
        ele.play().then(()=>{
            if (!ele.paused && !entry.isIntersecting) {
                ele.paused()  
            }
        })

    })
}
  
  let observer = new IntersectionObserver(callback, {rootMargin:'0px',threshold: [1.0,1.0]});
  useEffect(()=>{
    const elements = document.querySelectorAll(".videos")
    elements.forEach((element)=>{
        observer.observe(element)
    })
    return ()=>{
      observer.disconnect();
    }
  },[])

  return (
    <>
      <div className="videoCard">
        <VideoHeader />
        
        <video
          src={url}
          className="videoCard_player"
          onEnded={handleScroll}
          muted
          onClick={handleClick}
          controls
          autoPlay
        />
        <VideoFooter/>
      </div>
    </>
  );
}

export default DuplicateCard;
