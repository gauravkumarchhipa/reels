import React from 'react'
import './VideoFooter.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; 
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState,useEffect } from 'react';
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../ReelsVideoComponent/Api";


// import { useSelector,useDispatch } from 'react-redux';
// import { likeNum,commentNum,shareNum,followNum} from '../Redux/Action';

function VideoFooter({ channel,song,avatarSrc,likes,shares,commentsUrl, currentUserId}) {

  const [likess, setLikess] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);


  const handleClick = () => {
    setLikess(current=>!current)

    // if (isClicked) {
    //   setLikess(likess - 1 );
       
    // } else {
    //   setLikess(likess + 1);
    // }
    // setIsClicked(!isClicked);
  };

  // const myState = useSelector((state) => state.changeNumber)  
  // const dispatch = useDispatch();

//   const likeReel = (id) => {
//     dispatch(likeNum(id))
//     console.log(likeReel,"likeReel")
// }

  return (
    <>
      {/* <div className="videoFooter">
        <div className="videoFooter_text">
            <Avatar className="avtarImg"src={avatarSrc}/>
            <h3>
                {channel}.<Button>Follow</Button>
            </h3>
        </div>
            <div className="videoFooter_ticker">
                  <MusicNoteIcon 
                  className="videoFooter_icon"/>  
            </div>
            <div className="videoFooter_actions">
            <div className="videoFooter_actionsLeft">
                <FavoriteIcon 
                style={{
                  color: likess ? 'white' : '',
                  color: likess ? 'Red' : 'white',
                }}
                fontSize="medium" 
                onClick={ handleClick }/>
    

                <ModeCommentIcon fontSize="medium"/>
                <SendIcon fontSize="medium"/>
                <MoreHorizIcon fontSize="medium"/> */}
                {/* ----comment ---- */}
                
      <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
               
    </>
  )
}

export default VideoFooter
