import PropTypes from 'prop-types';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>
        Estado: <span className={character.status.toLowerCase()}>{character.status}</span>
      </p>
      <p>Especie: {character.species}</p>
      <p>Episodios: {character.episode.length}</p>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    episode: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CharacterCard;
