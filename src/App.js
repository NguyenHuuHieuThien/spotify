
import './App.css';
import Detailsong from './component/Detailsong';
import Listsong from './component/Listsong';
import Navbar from './component/Navbar';
import { songs } from './Context'
import DataSongs from './data/songs.json'
import Player from './component/Player';
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetsong = (idsong) => {
    const songs = DataSongs.find(song => song.id === idsong)
    if (!songs) {
      setSong(DataSongs[0])
    }
    else {
      setSong(songs)
    }
  }
  return (
    <div className="App">
      <songs.Provider value={{ DataSongs, song, handleSetsong}}>
        <Navbar />
          <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player '>
              {/* col-span-1 */}
              <Detailsong />
              {/* con-span-2 */}
              <Listsong/>
        </div>
        <Player/>
      </songs.Provider>
      
    </div>
  );
}

export default App;
