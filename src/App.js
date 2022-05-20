import React, {useState} from "react";
import CreateTweet from "./Components/CreateTweet";
import TweetList from "./Components/TweetList";

function App() {

  const [name,setName] = useState("Mike");

  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const message = 'hello';

  return (
    <div className="App">
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
      <TweetList  name={name} tweets={tweets} />
    </div>
  );
}

export default App;
