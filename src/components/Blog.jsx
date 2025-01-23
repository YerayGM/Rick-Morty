import { Link, useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Blog() {
  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || '';

  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  const filteredCharacters = data?.results.filter((character) =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="blog">
      <h1>Personajes</h1>
      <input
        type="text"
        placeholder="Buscar personajes"
        value={filter}
        onChange={handleChange}
      />
      {error && <p>Error: {error}</p>}
      {loading && <p>Cargando personajes...</p>}
      <div className="container-characters">
        {filteredCharacters?.map((character) => (
          <Link key={character.id} to={`/blog/${character.id}`} className="character-link">
            {character.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;