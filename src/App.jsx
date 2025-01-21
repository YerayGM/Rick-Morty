// App.js
import { useState } from 'react';
import CharacterList from './components/CharacterList';
import './index.css';

function App() {
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const resetCharacters = () => setCharacters(null);

  return (
    <div className="App">
      <header>
        <h1 className="title">Ricky & Morty App</h1>
        {!characters && (
          <button className="btn-search" onClick={fetchCharacters}>Buscar Personajes</button>
        )}
        {characters && (
          <span className="back-home" onClick={resetCharacters}>
            Vuelta a Home
          </span>
        )}
      </header>
      <main>
        {characters ? <CharacterList characters={characters} /> : <p>Busca personajes para empezar.</p>}
      </main>
    </div>
  );
}

export default App;