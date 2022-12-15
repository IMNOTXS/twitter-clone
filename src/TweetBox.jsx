import { Avatar, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import db from './firebase'
import './TweetBox.css'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: "XS",
      username: "IMNOTXS",
      verified: true,
      text:tweetMessage,
      image: tweetImage,
      avatar:"https://cdn.discordapp.com/attachments/1048226726796341258/1052987552031846400/main-qimg-402ce8fa4657e617e563f423501786df-lq.png"
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src='https://cdn.discordapp.com/attachments/1048226726796341258/1052987552031846400/main-qimg-402ce8fa4657e617e563f423501786df-lq.png'></Avatar>
          <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
        </div>
        <input onChange={(e) => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type="text"/>

        <Button onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox