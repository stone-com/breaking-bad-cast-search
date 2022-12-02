import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import { AppContextProvider } from './Context';

const App = () => {
  return (
    <AppContextProvider>
      <div className='container'>
        <Header />
        <Search />
        <CharacterGrid />
      </div>
    </AppContextProvider>
  );
};

export default App;
