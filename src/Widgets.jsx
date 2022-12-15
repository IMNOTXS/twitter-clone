import React from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import { Search } from '@mui/icons-material'
function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <Search className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId='1456973889297285132' />
        <TwitterTimelineEmbed sourceType='profile' screenName='IMNOTXS'
         options={{height: 400}} />
        <TwitterShareButton url='https://www.instagram.com/s.f.2.0.0.3/' 
        options={{text: "reactjs is better than next.js", via:"IMNOTXS"}} />
      </div>

    </div>
  )
}

export default Widgets