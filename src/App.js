import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import homeIcon from './assets/home.svg';
import savedIcon from './assets/bookmark.svg';
import upgradeIcon from './assets/rocket.svg';
// import aboutIcon from './assets/about.svg';

function App() {
  return (
    <div className="App">
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
      <div className="Main">

      </div>
    </div >

  );
}

export default App;
