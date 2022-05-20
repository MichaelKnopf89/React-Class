import React from "react";
import Tweet from "./Tweet";

const TweetList = ({name, tweets, setTweets})=>{
    return(
        <div className="tweetList">
            {tweets.map((tweet)=> (
            <Tweet name = {name} tweet = {tweet} setTweets={setTweets} tweets = {tweets} key={tweet.id}
             />))}
        </div>
    )
}

export default TweetList;