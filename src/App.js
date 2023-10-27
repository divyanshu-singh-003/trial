import './App.css';
import gptLogo from './law.svg';
import msgIcon from './message.svg';
import sendBtn from './send.svg'
import userIcon from './user-icon.png'
import gptImgLogo from './chatgptLogo.svg'
import {sendMsgToOpenAI} from './openai'
import {useState} from 'react'
function App() {
const[input,setInput] =useState("");
const[messages,setMessages]=useState([
  {
  text:"Hi I am a Legal-Bot designed by Divyanshu singh",
  isBot:true,
}
]);

  const handleSend= async () => {

    const text=input+" If it is not related to law or crime then dont reply";
    setInput('');
    setMessages([
      ...messages,
      { text,isBot:false}
      
    ])
    const res =await sendMsgToOpenAI(text)
    setMessages([
      ...messages,
      {text, isBot:false},
      {
        text:res,isBot:true
      }
    ])
  }
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">Legal ChatBot</span></div>
          <button className="midBtn">Instructions</button>
          
          <div className="upperSideBottom">
            <button className="query">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus magna eu dui dignissim, non condimentum tortor consequat. Quisque finibus cursus nunc, eu bibendum enim condimentum in. Etiam urna dolor, convallis nec tincidunt id, imperdiet ut ante. Ut maximus ex ut sodales fringilla. Phasellus porta odio in lobortis commodo. Vestibulum nec elementum neque, at molestie ex. Nulla porta ex nec porttitor pretium. Cras vitae diam nec nulla placerat ultrices. Sed id egestas dolor.

</button>
            <button className="query">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus magna eu dui dignissim, non condimentum tortor consequat. Quisque finibus cursus nunc, eu bibendum enim condimentum in. Etiam urna dolor, convallis nec tincidunt id, imperdiet ut ante. Ut maximus ex ut sodales fringilla. Phasellus porta odio in lobortis commodo. Vestibulum nec elementum neque, at molestie ex. Nulla porta ex nec porttitor pretium. Cras vitae diam nec nulla placerat ultrices. Sed id egestas dolor.

</button>
          </div>
          </div>
          
        
        <div className="lowerSide">

        </div>
      </div>
      <div className="main">
      <div className="chats">
  {messages.map((message, i) => {
    const messageText = message.isBot ? message.text : message.text.slice(0, -52); // Remove the last 10 characters if isBot is false

    return (
      <div key={i} className={message.isBot ? "chat bot" : "chat"}>
        <img className="chatImg" src={message.isBot ? gptImgLogo : userIcon} alt="" />
        <p className="txt">{messageText}</p>
      </div>
    );
  })}
</div>

        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>Only provide Information related to Indian Law</p>
        </div>
      </div>
    </div>
  );
}

export default App;
