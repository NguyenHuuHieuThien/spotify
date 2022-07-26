import React, { useContext } from 'react'
import { songs } from '../Context'
import AudioPlayer from 'react-h5-audio-player'

export default function Player() {
    const { song, handleSetsong } = useContext(songs)
    
    const handleNext = () => {
        handleSetsong(song.id + 1)
    }

    const handleback = () => {
        handleSetsong(song.id - 1)
    }


    return ( 
        <AudioPlayer

            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handleNext}
            onClickPrevious={handleback}
            className='bg-slate-900 text-white'
            src={song.url} />
  )
}
