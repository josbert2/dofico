import { useState, useEffect } from 'react';

import Image from 'next/image'
import { Inter } from 'next/font/google'

import Youtube from 'react-youtube'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [play, setPlay] = useState(false);
  const [player, setPlayer] = useState(null);
  const [volume, setVolume] = useState(50);


  
  const options = {
    height: '390',
    width: '680',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const onReady = (event) => {
    setPlayer(event.target);
  }

  useEffect(() => {
    if (play && player) {
      player.playVideo();
    }
  }, [play, player]);
  // https://puruvj.dev/blog/macos-dock-animation-svelte
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div class="image-container">
        <Image src={'https://wallpaperaccess.com/full/1959300.jpg'} 
          layout='fill' 
          objectFit='cover'
          className='blurred'
        />
        <div className='blurOverlay'></div>
      </div>
      <div class="">
        <Youtube videoId="3SeOVVJXOUo" opts={options} onReady={onReady} />
        
      </div>
      <div class="relative">
        <button onClick={() => setPlay(true)}>Play</button>
      </div>
    </main>
  )
}
