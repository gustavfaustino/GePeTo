import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import homeIcon from './assets/home.svg';
import savedIcon from './assets/bookmark.svg';
import upgradeIcon from './assets/rocket.svg';
// import aboutIcon from './assets/about.svg';
import userIcon from './assets/user-icon.png';
import sendBtn from './assets/send.svg';
import gptImgLogo from './assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">

      {/* Barra lateral, SIDEBAR */}
      <div className="sideBar">
        <div className='upperSidebar'>
          <div className='upperSidebarTop'>
            <img src={gptLogo} alt='logo do site' className='logo' />
            <span className='brand'>GePeTo</span></div>
          <button className='midBtn'><img src={addBtn} alt="New Chat" className="addBtn" />New Chat</button>
          <div className='Queries'>
            <button className='query'><img src={msgIcon} alt="Query" /> Query 1</button>
            <button className='query'><img src={msgIcon} alt="Query" /> Query 2</button>
          </div>
        </div>
        <div className='lowerSidebar'>
          <div className='listItems'><img src={homeIcon} alt='Home button' className='listItemIMG' />HOME</div>
          <div className='listItems'><img src={savedIcon} alt='Saved queries icon' className='listItemIMG' />SAVED</div>
          <div className='listItems'><img src={upgradeIcon} alt='' className='listItemIMG' />UPGRADE</div>
        </div>
      </div>

      {/* Início do MAIN, Bloco da direita */}
      <div className="main">
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt='User icon' />
            <p className='txt'>lorem ipsun oad doak doak oadk oakd</p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImgLogo} alt='ChatGPT Logo' />
            <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, magna vel cursus faucibus, nibh tortor porttitor dolor, sit amet fringilla purus ante non elit. Vivamus suscipit congue vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros mauris, luctus sed odio sed, vestibulum condimentum quam. Sed non neque ornare, maximus purus sit amet, volutpat risus. Nullam et mollis urna, at euismod dolor. Aliquam convallis sapien nec placerat gravida. Fusce efficitur metus at lacus porta volutpat. Aenean mattis purus vitae dapibus gravida. Proin suscipit malesuada facilisis. Praesent porta nibh pharetra risus consectetur porttitor. Donec orci odio, sollicitudin iaculis arcu.</p>
          </div>
        </div>

        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Type a message...' name='' id='' />
            <button className='send'>
              <img src={sendBtn} alt='Send message to AI button' />
            </button>
          </div>
          <p>GePeTo may produce inaccurate information about people, places or facts. GePeTo October 11 Version</p>
        </div>
      </div>
    </div >

  );
}

export default App;
