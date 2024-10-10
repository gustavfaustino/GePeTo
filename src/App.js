import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <div className='upperSidebar'>
          <div className='upperSidebarTop'>
            <img src='https://via.placeholder.com/150' alt='logo do site' className='logo' />
            <span className='LogoText'>Gepeto</span>
            <button className='midBtn'>
              <img src="" alt="" className="addBtn" /> New Project 
            </button>
            <div className='upperSideBotton'>

              <button className='queryBtn'><img src="" alt="" className="query" /> Eu sou um menino de verdade?</button>
              <button className='queryBtn'><img src="" alt="" className="query" /> Qual é a cor do cavalo branco de Napoleão?</button>

            </div>

          </div>
        </div>

        <div className='lowerSidebar'></div>
      </div>

      <div className="Main">

      </div>
    </div >
  );
}

export default App;
