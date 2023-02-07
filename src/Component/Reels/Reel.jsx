import React, { useEffect, useState } from 'react'
// import VideoCard from './VideoCard'
import DemoJson from './DemoJson';
import DuplicateCard from './DuplicateCard';
import { useSelector,useDispatch } from 'react-redux';
import { likeNum,commentNum,shareNum,followNum} from '../Redux/Action';

function Reel() {
  const myState = useSelector((state) => state.changeNumber)  
  const dispatch = useDispatch();
  return (
    <>
      <h1 style={{color:"white"}}>Welcome Reels Demo</h1>
      <div className="app_top">
        <img className="app_logo"src="https://www.zyapaar.com/static/assets/logo.89e27487.svg" alt="" />
        <h1>Reels</h1>

      </div>
      <div className="app_videos">
        {
          DemoJson.map(({channel,avatarSrc,song,url,likes,shares}, i)=>(

            <DuplicateCard 
            key={i}
            channel={channel}
            avatarSrc={avatarSrc}
            song= {song}
            url={url}
            likes={likes}
            shares={shares}

            value={myState}
            />
            ))} 
      </div> 
    </>
  )
}

export default Reel
