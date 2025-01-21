import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

function CharacterList({ characters }) {
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <div className="container-characters">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CharacterList;