import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function BlogCharacter() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);

  return (
    <div className="blog-character">
      <Link to="/blog">Volver al Blog</Link>
      {error && <p>Error: {error}</p>}
      {loading && <p>Cargando personaje...</p>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.image} alt={data.name} />
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
        </div>
      )}
    </div>
  );
}

export default BlogCharacter;