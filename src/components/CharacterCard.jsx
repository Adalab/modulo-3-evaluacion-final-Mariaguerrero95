import "../scss/components/CharacterCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterCard({ character }) {
  return (
    <div className="cardDetail">
      <Link className="cardDetail__link" to={`/detail/${character.id}`}> 
        <img className="cardDetail__image" src={character.image} alt={character.name} />
        <div className="cardDetailinfo">
          <p className="cardDetail_name">{character.name}</p>
          <p className="cardDetail__species">{character.species}</p>
        </div>
        </Link>
    </div>
  )
}


CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;