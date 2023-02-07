import './App.css';
import Reel from './Component/Reels/Reel';
// import New from './New';
import Comments from './Component/ReelsVideoComponent/Comments'

function App() {
  return (
    <div className="App">
    <Reel></Reel>
    <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
  {/* <New></New> */}
      
    </div>
  );
}

export default App;
