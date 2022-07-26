import React, { useContext, useEffect, useState } from 'react'
import { songs } from '../Context'

export default function Listsong() {
    const { DataSongs,song, handleSetsong } = useContext(songs)

    const [idsong, setIdsong] = useState(0)

    
    const selectSong = id => {

        setIdsong(id)

        handleSetsong(id)
        
    }
    useEffect(() => {
        setIdsong(song.id)
    },[song.id])

  return (
      <div className='col-span-2 overflow-hidden overflow-y-scroll'>
          <table className='table-auto w-full'>
              <thead className= "text-white h-12">
                  <tr>
                      <th className='text-center'>#</th>
                      <th className='text-center'>img</th>
                      <th className='text-left'>Title</th>
                      <th className='w-[30%] text-center'>Author</th>
                      <th><i className='fa fa-download' aria-hidden="true"></i></th>
                  </tr>
              </thead>
              <tbody>
                  {DataSongs.map((song, index) =>(
                      <tr
                          key={index}
                          className={`bg-slate-800 h-16 text-white hover:text-white hover:bg-gray-600 cursor-pointer   ${idsong === song.id && 'text-[#2ecc71] bg-gray-600'} `}
                          onClick={() => selectSong(song.id)}>
                          <td className='text-center pr-3 pl-3'><i class="fa fa-music" aria-hidden="true"></i></td>
                          <td><img className='w-[40px] rounded-sm' src={song.links.images[1].url}></img></td>
                          <td>{song.name}</td>
                        <td className='text-center'>{song.author}</td>
                          <td className='text-center'><a href={song.url}><i className='fa fa-download' aria-hidden="true"></i></a></td>
                    </tr>)
                  )}
            </tbody>
          </table>
    </div>
  )
}
