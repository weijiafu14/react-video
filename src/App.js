import logo from './logo.svg';
import './App.css';
// import '~video-react/dist/video-react.css';
import { Player } from 'video-react';


function App() {
  return (
    <div className="App">
      <Player>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
    </div>
  );
}

export default App;
