import React, {useState} from "react";
import CreateTweet from "./Components/CreateTweet";
import TweetList from "./Components/TweetList";

function App() {

  const [name,setName] = useState("Mike");
  const message = 'hello';

  return (
    <div className="App">
      <CreateTweet />
      <TweetList  name={name} message = {message} />
    </div>
  );
}

export default App;
