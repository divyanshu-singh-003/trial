import './App.css';
import gptLogo from './law.svg';
import msgIcon from './message.svg';
import sendBtn from './send.svg'
import userIcon from './user-icon.png'
import gptImgLogo from './chatgptLogo.svg'
function App() {
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
          <div className="chat">
            <img src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus magna eu dui dignissim, non condimentum tortor consequat</p>
          </div>

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message"/> <button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
