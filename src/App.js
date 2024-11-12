import { useContext } from 'react';
import Kosar from './components/Kosar';
import Termekek from './components/Termekek';
import { ApiContext } from './contexts/ApiContext';
import logo from './logo.svg';
import Public from './pages/Public';
import Urlap from './components/Urlap';
import Admin from './pages/Admin';

function App() {
  
  return (
    <div className="App">
    <header className='App-header'>
      <h1>Fakestore webáruház</h1>
    </header>
      
     <Public />

    </div>
  );
}

export default App;
