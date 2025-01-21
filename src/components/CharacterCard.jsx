
import PropTypes from 'prop-types';

function CharacterCard({ character }) {
  const { image, name, status, species, episode } = character;
  return (
    <div className="character-container">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <h6>
          <span className={status.toLowerCase()}></span>
          {status} - {species}
        </h6>
        <p className="text-grey">Episodios: {episode.length}</p>
      </div>
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