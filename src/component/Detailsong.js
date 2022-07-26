import React, { useContext, useState } from 'react'
import { songs } from '../Context'
import AudioPlayer from 'react-h5-audio-player'



export default function Detailsong() {
    const { song, handleSetsong } = useContext(songs)


    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500 font-bold'>Now Playing</h2>
            <p className='text-2xl text-neutral-400'>Sing me to sleep</p>
            <div className='w-[200px] m-auto mt-[30px]'>
                <img className='rounded-full' src={song.links.images[0].url}></img>
            </div>
            <div className='text-center mt-3 text-white'>
                <h2 className='font-bold text-2xl'><i class="fa fa-music mr-2" aria-hidden="true"></i>{song.name}</h2>
                <p className='mt-2 text-xl'><i class="fa fa-user-circle-o mr-2" aria-hidden="true"></i>{ song.author}</p>
            </div>
            <div className='text-center mt-5'>
                <button onClick={() => handleSetsong(song.id)} className='text-white py-2 px-8  rounded-3xl   bg-emerald-600'><i class="fa fa-play mr-3" aria-hidden="true"></i>Play</button>
            </div>
           
        </div>
    )
}
